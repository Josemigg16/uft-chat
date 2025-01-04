'use client'
import { useChatsStore } from '@/stores/chats-store'
import { useMessagesStore } from '@/stores/messages-store'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Aside() {
  const pathname = usePathname()
  const chats = useChatsStore((state) => state.chats)
  const setMessages = useMessagesStore((state) => state.setMessages)
  return (
    <aside className="flex h-[calc(100vh-115px)] flex-col border-r-2 bg-[#540b1d]">
      <section className="row-span-4 flex-grow border-b-2 p-3">
        <h3 className="mb-5 text-center text-2xl font-semibold text-white">
          Chats
        </h3>
        <ul className="overflow-y-auto">
          {chats
            ? chats.map((chat) => (
                <Link
                  className={`block overflow-hidden text-ellipsis text-nowrap rounded px-3 py-2 text-lg font-medium text-gray-300 hover:bg-red-950 ${pathname.includes(chat.sessionId) && 'bg-red-950'}`}
                  key={chat.sessionId}
                  href={`/chat/${chat.sessionId}`}
                  onClick={() =>
                    chat.sessionId !== pathname.split('/')[2] && setMessages([])
                  }
                >
                  {chat.name}
                </Link>
              ))
            : []}
        </ul>
      </section>
      <div className="grid place-content-center bg-white p-3 grid-cols-1">
        <button
          className="mt-[1.5rem] block h-[60px] w-full border-2 border-dashed py-2 pl-2 text-lg transition-all"
          disabled
        >
          Nuevo chat
        </button>
      </div>
    </aside>
  )
}
