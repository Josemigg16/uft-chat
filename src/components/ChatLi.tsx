import { redirect, usePathname } from 'next/navigation'
import Link from 'next/link'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMessagesStore } from '@/stores/messages-store'
import { useEffect, useRef, useState } from 'react'
import { useChatsStore } from '@/stores/chats-store'

export default function ChatLi({ chat }: { chat: Chat }) {
  const pathname = usePathname()
  const setMessages = useMessagesStore((state) => state.setMessages)
  const setChat = useChatsStore((state) => state.setChat)
  const deleteChat = useChatsStore((state) => state.deleteChat)
  const [isEditing, setIsEditing] = useState(false)
  const [chatName, setChatName] = useState(chat.name)
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (
      location.search.includes('editing=true') &&
      location.pathname.includes(chat.sessionId)
    ) {
      console.log('editing')
      setIsEditing(true)
      setInterval(() => {
        inputRef.current?.focus()
      }, 500)
    }
  }, [pathname])

  return (
    <Link
      className={`flex justify-between overflow-hidden text-ellipsis text-nowrap rounded px-3 py-2 text-lg font-medium text-gray-300 hover:bg-red-950 ${pathname.includes(chat.sessionId) && 'bg-red-950'}`}
      key={chat.sessionId}
      href={`/chat/${chat.sessionId}`}
      onClick={() =>
        chat.sessionId !== pathname.split('/')[2] && setMessages([])
      }
    >
      {isEditing ? (
        <input
          ref={inputRef}
          className="max-w-[50px] bg-transparent outline-none lg:max-w-[150px]"
          onChange={(e) => setChatName(e.target.value)}
          value={chatName}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === 'Escape') {
              setChat({
                ...chat,
                name: chatName,
              })
              setIsEditing(false)
              redirect(`/chat/${chat.sessionId}`)
            }
          }}
          onBlur={() => {
            setChat({
              ...chat,
              name: chatName,
            })
            setIsEditing(false)
            redirect(`/chat/${chat.sessionId}`)
          }}
        />
      ) : (
        <span className="max-w-[50px] text-ellipsis text-nowrap lg:max-w-[150px] block overflow-hidden">
          {chat.name}
        </span>
      )}
      <div>
        <button
          onClick={(e) => {
            e.preventDefault()
            setIsEditing(!isEditing)
            setInterval(() => {
              inputRef.current?.focus()
            }, 100)
          }}
          className="aspect-square rounded px-2 hover:bg-gray-600 hover:bg-opacity-30"
        >
          <FontAwesomeIcon icon={faPen} />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            deleteChat(chat)
          }}
          className="aspect-square rounded px-2 hover:bg-gray-600 hover:bg-opacity-30"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </Link>
  )
}
