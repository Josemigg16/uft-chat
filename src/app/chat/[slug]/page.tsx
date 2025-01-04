'use client'
import { getChat } from '@/app/actions/getChat'
import { useMessagesStore } from '@/stores/messages-store'
import { use, useEffect } from 'react'

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const messages = useMessagesStore((state) => state.messages)
  const setMessages = useMessagesStore((state) => state.setMessages)
  useEffect(() => {
    const chatPromise = getChat({ sessionId: slug })
    chatPromise.then((data) => {
      setMessages(data)
    })
  }, [setMessages, slug])
  return messages.map((message) => (
    <div
      className={`m-4 w-3/4 rounded-xl p-4 ${
        message.role === 'user' ? 'ml-auto bg-gray-200' : 'mr-auto bg-red-300'
      }`}
      key={crypto.randomUUID()}
    >
      {message.content}
    </div>
  ))
}
