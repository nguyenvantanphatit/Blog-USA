"use client"
import { useState, useEffect, RefObject } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Conversation, Message, User } from '@/types/types'
import { IconArrowLeft, IconDotsVertical, IconPhone, IconSend, IconVideo } from '@tabler/icons-react'
import { sendMessage } from '@/lib/api'
import { getSocket } from '@/utils/socket'

interface ChatWindowProps {
  conversation: Conversation | null
  messages: Message[]
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
  currentUser: User | null
  messagesEndRef: RefObject<HTMLDivElement>
}

export function ChatWindow({ conversation, messages, setMessages, currentUser, messagesEndRef }: ChatWindowProps) {
  const [newMessage, setNewMessage] = useState('')

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, messagesEndRef])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim() || !conversation || !currentUser) return

    try {
      const sentMessage = await sendMessage(conversation.id, newMessage)
      setNewMessage('')
      const socket = getSocket()
      socket.emit('new_message', {
        conversationId: conversation.id,
        message: sentMessage
      })
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  if (!conversation) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-500">
        Select a conversation to start chatting
      </div>
    )
  }
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-3">
          <Button size="icon" variant="ghost" className="lg:hidden">
            <IconArrowLeft />
          </Button>
          <div>
            <div className="font-medium">{conversation.adminId}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost" className="hidden lg:flex">
            <IconVideo size={20} />
          </Button>
          <Button size="icon" variant="ghost" className="hidden lg:flex">
            <IconPhone size={20} />
          </Button>
          <Button size="icon" variant="ghost">
            <IconDotsVertical size={20} />
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.senderId === currentUser?.id ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] px-4 py-2 rounded-lg ${message.senderId === currentUser?.id ? 'bg-blue-500 text-white' : 'bg-white'
                }`}
            >
              <div className="text-sm font-medium mb-1">
                {message.senderId === currentUser?.id ? 'You' : message.User?.username || message.senderId}
              </div>
              <div>{message.content}</div>
            </div>
          </div>

        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-white">
        <div className="flex space-x-4">
          <Input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button type="submit">
            <IconSend size={20} className="mr-2" />
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}

