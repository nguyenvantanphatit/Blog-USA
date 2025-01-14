'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function ScreenRecorder() {
  const [isRecording, setIsRecording] = useState(false)
  const [videoURL, setVideoURL] = useState<string | null>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])
  const audioContextRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    // Initialize AudioContext
    audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close()
      }
    }
  }, [])

  const applyAudioFilters = (stream: MediaStream) => {
    if (!audioContextRef.current) return stream

    const source = audioContextRef.current.createMediaStreamSource(stream)
    const destination = audioContextRef.current.createMediaStreamDestination()

    // Apply a high-pass filter to reduce low-frequency noise
    const highPassFilter = audioContextRef.current.createBiquadFilter()
    highPassFilter.type = 'highpass'
    highPassFilter.frequency.value = 85 // Adjust this value to change the cutoff frequency

    // Apply a low-pass filter to reduce high-frequency noise
    const lowPassFilter = audioContextRef.current.createBiquadFilter()
    lowPassFilter.type = 'lowpass'
    lowPassFilter.frequency.value = 3500 // Adjust this value to change the cutoff frequency

    // Connect the audio nodes
    source.connect(highPassFilter)
    highPassFilter.connect(lowPassFilter)
    lowPassFilter.connect(destination)

    return destination.stream
  }

  const startRecording = useCallback(async () => {
    chunksRef.current = []
    try {
      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: { width: 2560, height: 1440 },
        audio: true // Capture system audio
      })

      const voiceStream = await navigator.mediaDevices.getUserMedia({
        audio: true // Capture microphone audio
      })

      // Apply audio filters to the voice stream
      const filteredVoiceStream = applyAudioFilters(voiceStream)

      // Combine the screen and filtered voice streams
      const combinedStream = new MediaStream([
        ...screenStream.getVideoTracks(),
        ...screenStream.getAudioTracks(),
        ...filteredVoiceStream.getAudioTracks()
      ])

      const mediaRecorder = new MediaRecorder(combinedStream, {
        mimeType: 'video/webm; codecs=vp9'
      })

      mediaRecorderRef.current = mediaRecorder

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data)
        }
      }

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'video/webm' })
        const url = URL.createObjectURL(blob)
        setVideoURL(url)

        // Stop all tracks
        screenStream.getTracks().forEach(track => track.stop())
        voiceStream.getTracks().forEach(track => track.stop())
      }

      mediaRecorder.start()
      setIsRecording(true)
    } catch (error) {
      console.error('Error starting recording:', error)
    }
  }, [])

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
    }
  }, [])

  return (
    <div className="flex flex-col items-center gap-4">
      {!isRecording && (
        <Button onClick={startRecording}>Start Recording</Button>
      )}
      {isRecording && (
        <Button onClick={stopRecording} variant="destructive">Stop Recording</Button>
      )}
      {videoURL && (
        <div className="mt-4">
          <video src={videoURL} controls width="640" height="360" />
          <a
            href={videoURL}
            download="screen-recording.webm"
            className="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Download Recording
          </a>
        </div>
      )}
    </div>
  )
}

