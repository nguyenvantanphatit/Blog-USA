'use client'
import { useState, useEffect } from 'react'
export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date('2025-01-29T00:00:00')
    
    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section>
      <div className="container mx-auto p-4 text-white">
        <h2 className="md:text-3xl text-xl font-bold text-center mb-8">Đếm ngược đến Tết Nguyên Đán</h2>
        <div className="flex justify-center space-x-8">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center">
              <div className="md:text-4xl text-2xl font-bold bg-red-700 rounded-full md:w-24 w-16 md:h-24 h-16 items-center flex justify-center">
                {value}
              </div>
              <div className="mt-2 md:text-lg text-base capitalize">{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

