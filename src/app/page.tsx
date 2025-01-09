'use client'
import { useChatsStore } from '@/stores/chats-store'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { redirect } from 'next/navigation'
import { FormEvent } from 'react'

export default function Home() {
  const addChat = useChatsStore((state) => state.addChat)
  const handleAddChat = (e: FormEvent) => {
    e.preventDefault()
    const sessionId = crypto.randomUUID()
    addChat({
      sessionId,
      name: 'Nuevo chat',
    })
    redirect(`/chat/${sessionId}`)
  }
  return (
    <form
      onSubmit={handleAddChat}
      className="grid h-full w-full place-content-center"
    >
      <div className="relative">
        <button
          type="submit"
          className="bottom-0 right-3 top-0 -mt-16 rounded border-2 py-4 pl-4 text-3xl text-gray-900 transition-all hover:bg-gray-100 hover:text-gray-800 active:scale-95"
        >
          Empezar
          <FontAwesomeIcon className="px-4" icon={faCircleArrowRight} />
        </button>
      </div>
    </form>
  )
}
