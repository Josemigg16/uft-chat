import { create } from 'zustand'
type State = {
  chats: Chat[]
}

type Action = {
  addChat: (chat: Chat) => void
}

export const useChatsStore = create<State & Action>((set) => ({
  chats:
    typeof window !== 'undefined' &&
    JSON.parse(localStorage.getItem('chats') || '[]'),
  addChat: (chat) =>
    set((state) => {
      const newChats = [...state.chats, chat]
      localStorage.setItem('chats', JSON.stringify(newChats))
      return { chats: newChats }
    }),
}))
