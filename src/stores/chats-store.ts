import { create } from 'zustand'
type State = {
  chats: Chat[]
}

type Action = {
  addChat: (chat: Chat) => void
  setChat: (chat: Chat) => void
  setChats: (chats: Chat[]) => void
  deleteChat: (chat: Chat) => void
}

export const useChatsStore = create<State & Action>((set) => ({
  chats:
    typeof window !== 'undefined' &&
    JSON.parse(localStorage.getItem('chats') || '[]'),
  setChat: (chat) => {
    set((state) => {
      const newChats = state.chats.map((c) => {
        if (c.sessionId === chat.sessionId) {
          return chat
        }
        return c
      })
      localStorage.setItem('chats', JSON.stringify(newChats))
      return { chats: newChats }
    })
  },
  setChats: (newChats) => ({ chats: newChats }),
  addChat: (chat) =>
    set((state) => {
      const newChats = [...state.chats, chat]
      localStorage.setItem('chats', JSON.stringify(newChats))
      return { chats: newChats }
    }),
  deleteChat: (chat) =>
    set((state) => {
      const newChats = state.chats.filter((c) => c.sessionId !== chat.sessionId)
      localStorage.setItem('chats', JSON.stringify(newChats))
      return { chats: newChats }
    }),
}))
