import { create } from 'zustand'
type State = {
  messages: Message[]
}

type Action = {
  setMessages: (messages: Message[]) => void
  addMessage: (chat: Message) => void
}

export const useMessagesStore = create<State & Action>((set) => ({
  messages: [],
  setMessages: (messages) => set({ messages }),
  addMessage: (message) =>
    set((state) => {
      const newMessages = [...state.messages, message]
      return { messages: newMessages }
    }),
}))
