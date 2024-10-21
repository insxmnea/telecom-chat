import { create } from "zustand";
import { Message, MessagesState } from "../types/models";

export const useMessagesStore = create<MessagesState>((set) => ({
  messages: [],
  addMessage: (message: Message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  editMessage: (message: Message) =>
    set((state) => ({
      messages: state.messages.map((m) => (m.id === message.id ? message : m)),
    })),
  deleteMessage: (message: Message) =>
    set((state) => ({
      messages: state.messages.filter((m) => m.id !== message.id),
    })),
}));
