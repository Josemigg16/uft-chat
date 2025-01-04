'use server'

interface Props {
  sessionId: string
}

export async function getChat({ sessionId }: Props) {
  const res = await fetch(
    `https://anythingllm2.fly.dev/api/v1/workspace/uft/chats?apiSessionId=${sessionId}&orderBy=asc`,
    {
      headers: {
        Authorization: `Bearer ${process.env.ANYTHINGLLM_API_KEY}`,
        Accept: 'application/json',
      },
    }
  )
  const data = await res.json()
  const messages = data.history.map((message: Message) => ({
    content: message.content,
    role: message.role,
    sentAt: message.sentAt,
  }))
  console.log(messages)
  return messages
}
