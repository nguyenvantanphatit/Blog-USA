'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { ChatList } from '@/components/chat-list'
import { ChatWindow } from '@/components/chat-window'
import { fetchCurrentUser, fetchConversations, fetchMessages, createConversation } from '@/lib/api'
import { Conversation, Message, User } from '@/types/types'
import { initSocket, getSocket } from '@/utils/socket'

export default function ChatPage() {
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [currentConversation, setCurrentConversation] = useState<Conversation | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  const handleNewMessage = useCallback((message: Message) => {
    setMessages(prevMessages => {
      const messageExists = prevMessages.some(m => m.id === message.id)
      if (!messageExists) {
        const newMessages = [...prevMessages, message]
        setTimeout(scrollToBottom, 0)
        return newMessages
      }
      return prevMessages
    })

    setConversations(prevConversations => {
      return prevConversations.map(conv => {
        if (conv.id === message.senderId) {
          return { ...conv, lastMessage: message, isNew: conv.id !== currentConversation?.id }
        }
        return conv
      })
    })
  }, [scrollToBottom, currentConversation])

  const handleNewConversation = useCallback((conversation: Conversation) => {
    setConversations(prevConversations => {
      const conversationExists = prevConversations.some(c => c.id === conversation.id);
      if (!conversationExists) {
        // For admin, add all new conversations
        if (currentUser?.isAdmin) {
          return [{ ...conversation, isNew: true }, ...prevConversations];
        }
        // For regular users, only add conversations they're part of
        if (conversation.userId === currentUser?.id) {
          return [{ ...conversation, isNew: true }, ...prevConversations];
        }
      }
      return prevConversations;
    });
  }, [currentUser]);

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/login')
      return
    }

    const socket = initSocket(token)

    const initializeChat = async () => {
      try {
        const user = await fetchCurrentUser()
        setCurrentUser(user)
        const fetchedConversations = await fetchConversations()
        setConversations(fetchedConversations)
        setLoading(false)

        socket.connect()
        socket.on('new_message', handleNewMessage)
        socket.on('new_conversation', handleNewConversation)
      } catch (error) {
        console.error('Error initializing chat:', error)
        router.push('/login')
      }
    }

    initializeChat()

    return () => {
      socket.off('new_message', handleNewMessage)
      socket.off('new_conversation', handleNewConversation)
      socket.disconnect()
    }
  }, [router, handleNewMessage, handleNewConversation])

  const handleConversationSelect = async (conversation: Conversation) => {
    const socket = getSocket()
    if (currentConversation) {
      socket.emit('leave_conversation', currentConversation.id.toString())
    }

    setCurrentConversation(conversation)
    try {
      const fetchedMessages = await fetchMessages(conversation.id)
      setMessages(fetchedMessages)
      scrollToBottom()

      // Mark the conversation as not new when selected
      setConversations(prevConversations => 
        prevConversations.map(conv => 
          conv.id === conversation.id ? { ...conv, isNew: false } : conv
        )
      )
    } catch (error) {
      console.error('Error fetching messages:', error)
      setMessages([])
    }

    socket.emit('join_conversation', conversation.id.toString())
  }

  const handleStartChat = async () => {
    try {
      const newConversation = await createConversation()
      const updatedConversations = await fetchConversations()
      setConversations(updatedConversations)
      
      const createdConversation = updatedConversations.find(c => c.id === newConversation.id)
      if (createdConversation) {
        await handleConversationSelect(createdConversation)
      } else {
        console.error('Created conversation not found in updated list')
      }
    } catch (error) {
      console.error('Error starting new chat:', error)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <ChatList
        conversations={conversations}
        currentUser={currentUser}
        onSelectConversation={handleConversationSelect}
        currentConversation={currentConversation}
        onStartChat={handleStartChat}
      />
      <ChatWindow
        conversation={currentConversation}
        messages={messages}
        setMessages={setMessages}
        currentUser={currentUser}
        messagesEndRef={messagesEndRef}
      />
    </div>
  )
}

