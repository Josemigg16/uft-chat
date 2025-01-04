'use server'

interface Props {
  message: string
  sessionId: string
}

export async function chat({ message, sessionId }: Props) {
  console.log(sessionId)
  const res = await fetch(
    `https://anythingllm2.fly.dev/api/v1/workspace/uft/chat`,
    {
      headers: {
        Authorization: `Bearer ${process.env.ANYTHINGLLM_API_KEY}`,
        Accept: 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        message,
        mode: 'chat',
        sessionId,
      }),
    }
  )
  const data = await res.json()
  return data.textResponse
}
