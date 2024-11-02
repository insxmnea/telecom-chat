import { create } from "zustand";
import { Message, MessagesState } from "../types/models";
import { mockedMessages } from "./mockedMessages";

const $LOCAL_MESSAGES_KEY = "messages";

const getInitialMessages = () => {
  if (typeof window !== "undefined") {
    const messages =
      JSON.parse(localStorage.getItem($LOCAL_MESSAGES_KEY) ?? "false") ||
      mockedMessages;

    return messages;
  }
};

export const useMessagesStore = create<MessagesState>((set) => ({
  messages: getInitialMessages(),
  addMessage: (message: Message) =>
    set((state) => {
      localStorage.setItem(
        $LOCAL_MESSAGES_KEY,
        JSON.stringify([...state.messages, message])
      );

      return { messages: [...state.messages, message] };
    }),
  editMessage: (message: Message) =>
    set((state) => {
      const result = state.messages.map((m) =>
        m.id === message.id ? message : m
      );

      localStorage.setItem($LOCAL_MESSAGES_KEY, JSON.stringify(result));

      return {
        messages: result,
      };
    }),
  deleteMessage: (message: Message) =>
    set((state) => {
      const result = state.messages.filter((m) => m.id !== message.id);

      localStorage.setItem($LOCAL_MESSAGES_KEY, JSON.stringify(result));

      return {
        messages: result,
      };
    }),
}));
