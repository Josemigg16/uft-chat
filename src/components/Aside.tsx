'use client'
import { useChatsStore } from '@/stores/chats-store'
import ChatLi from './ChatLi'
import { redirect } from 'next/navigation'

export default function Aside() {
  const chats = useChatsStore((state) => state.chats)
  const addChat = useChatsStore((state) => state.addChat)
  return (
    <aside className="flex h-[calc(100vh-115px)] flex-col border-r-2 bg-[#540b1d]">
      <section className="row-span-4 flex-grow border-b-2 p-3">
        <h3 className="mb-5 text-center text-2xl font-semibold text-white">
          Chats
        </h3>
        <ul className="overflow-y-auto">
          {chats
            ? chats.map((chat) => <ChatLi key={chat.sessionId} chat={chat} />)
            : []}
        </ul>
      </section>
      <div className="grid grid-cols-1 place-content-center bg-white p-3">
        <button
          onClick={() => {
            const sessionId = crypto.randomUUID()
            addChat({
              sessionId,
              name: 'Nuevo chat',
            })
            redirect(`${sessionId}?editing=true`)
          }}
          className="mt-[1.5rem] block h-[60px] w-full border-2 border-dashed py-2 pl-2 text-lg transition-all hover:bg-gray-200 active:scale-[.98]"
        >
          Nuevo chat
        </button>
      </div>
    </aside>
  )
}
