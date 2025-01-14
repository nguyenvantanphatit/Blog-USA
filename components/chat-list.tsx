"use client"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Conversation, User } from '@/types/types'
import { IconEdit, IconMessages, IconSearch, IconPlus } from '@tabler/icons-react'

interface ChatListProps {
  conversations: Conversation[]
  currentUser: User | null
  onSelectConversation: (conversation: Conversation) => void
  currentConversation: Conversation | null
  onStartChat: () => void
}

export function ChatList({ conversations, onSelectConversation, currentConversation, onStartChat }: ChatListProps) {
  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            Inbox
            <IconMessages size={20} />
          </h2>
          <Button size="icon" variant="ghost" className="rounded-lg" onClick={onStartChat}>
            <IconPlus size={24} className="text-gray-500" />
          </Button>
        </div>
        <div className="relative">
          <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input
            type="text"
            placeholder="Search chats..."
            className="pl-10 w-full"
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            onClick={() => onSelectConversation(conversation)}
            className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 ${
              currentConversation?.id === conversation.id ? 'bg-blue-50' : ''
            }`}
          >
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>{conversation?.user?.username.slice(0,1) || 'A'}</AvatarFallback>
              </Avatar>
              <div className="font-medium">
                {conversation?.user?.username.slice(0,10) || 'Admin'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

