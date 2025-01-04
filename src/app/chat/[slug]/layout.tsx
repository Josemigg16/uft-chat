'use client'

import { chat } from '@/app/actions/chat'
import { useMessagesStore } from '@/stores/messages-store'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { usePathname } from 'next/navigation'
import { FormEvent, useRef } from 'react'

export default function Page({ children }: { children: React.ReactNode }) {
  const input = useRef(null)
  const sessionId = usePathname().split('/')[2]
  const addMessage = useMessagesStore((state) => state.addMessage)
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!input.current) return
    const message = (input.current as HTMLInputElement).value
    if (!message) return
    addMessage({
      content: message,
      role: 'user',
      sentAt: Date.now(),
    })
    ;(input.current as HTMLInputElement).value = ''
    chat({ message, sessionId }).then((res) => {
      console.log(res)
      addMessage({
        content: res,
        role: 'assistant',
        sentAt: Date.now(),
      })
    })
  }
  return (
    <div className="flex h-[calc(100vh-115px)] flex-col justify-between">
      <article className="flex-grow overflow-y-auto">{children}</article>
      <form
        onSubmit={handleSubmit}
        className="mx-auto grid w-3/4 grid-cols-1 place-content-center"
      >
        <div className="relative px-4">
          <input
            ref={input}
            className="my-4 w-full rounded-xl bg-gray-200 py-3 pl-4 pr-12 outline-none"
            type="text"
            placeholder="Envía un mensaje"
          />
          <button className="absolute bottom-0 right-4 top-0 p-3 text-3xl text-gray-900 transition-all hover:text-gray-800 active:scale-95">
            <FontAwesomeIcon className="" icon={faCircleArrowRight} />
          </button>
        </div>
      </form>
    </div>
  )
}
