interface Chat {
  id: number
  name: string
  messages: Message[]
}
interface Message {
  id: number
  text: string
  role: string
  time: string
}

export const chats: Chat[] = [
  {
    id: 1,
    name: 'Chat 1',
    messages: [
      {
        id: 1,
        text: 'Hello',
        role: 'user',
        time: '12:00',
      },
      {
        id: 2,
        text: 'Hi',
        role: 'assistant',
        time: '12:01',
      },
      {
        id: 3,
        text: 'How can I help you today?',
        role: 'assistant',
        time: '12:02',
      },
      {
        id: 4,
        text: 'I need help with my code',
        role: 'user',
        time: '12:03',
      },
      {
        id: 5,
        text: 'What specific issue are you having?',
        role: 'assistant',
        time: '12:04',
      },
    ],
  },
  {
    id: 2,
    name: 'Chat 2',
    messages: [
      {
        id: 1,
        text: 'Hello',
        role: 'user',
        time: '12:00',
      },
      {
        id: 2,
        text: 'Hi',
        role: 'assistant',
        time: '12:01',
      },
      {
        id: 3,
        text: 'Can you help me debug this error?',
        role: 'user',
        time: '12:05',
      },
      {
        id: 4,
        text: 'Of course! Please share the error message',
        role: 'assistant',
        time: '12:06',
      },
      {
        id: 5,
        text: 'TypeError: Cannot read property of undefined',
        role: 'user',
        time: '12:07',
      },
      {
        id: 6,
        text: 'This usually means you are trying to access a property on an undefined object',
        role: 'assistant',
        time: '12:08',
      },
    ],
  },
  {
    id: 3,
    name: 'Chat 3',
    messages: [
      {
        id: 1,
        text: 'Hello',
        role: 'user',
        time: '12:00',
      },
      {
        id: 2,
        text: 'Hi',
        role: 'assistant',
        time: '12:01',
      },
      {
        id: 3,
        text: 'What is the best way to learn TypeScript?',
        role: 'user',
        time: '12:10',
      },
      {
        id: 4,
        text: 'Start with the official documentation and practice with small projects',
        role: 'assistant',
        time: '12:11',
      },
      {
        id: 5,
        text: 'Any recommended resources?',
        role: 'user',
        time: '12:12',
      },
      {
        id: 6,
        text: 'TypeScript Handbook and TypeScript Deep Dive are great resources',
        role: 'assistant',
        time: '12:13',
      },
      {
        id: 7,
        text: 'Thank you!',
        role: 'user',
        time: '12:14',
      },
    ],
  },
]
