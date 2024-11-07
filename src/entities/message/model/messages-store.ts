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
  editMessageId: null,
  addMessage: (message: Message) =>
    set((state) => {
      localStorage.setItem(
        $LOCAL_MESSAGES_KEY,
        JSON.stringify([...state.messages, message])
      );

      return { messages: [...state.messages, message] };
    }),
  startEditing: (id) => set(() => ({ editMessageId: id })),
  stopEditing: () => set(() => ({ editMessageId: null })),
  updateMessage: (messageId: string, text: string) =>
    set((state) => {
      const result = state.messages.map((message) => {
        if (message.id === messageId) {
          return { ...message, text };
        }

        return message;
      });

      localStorage.setItem($LOCAL_MESSAGES_KEY, JSON.stringify(result));

      return {
        messages: result,
      };
    }),
  deleteMessage: (messageId: string) =>
    set((state) => {
      const result = state.messages.filter(
        (message) => message.id !== messageId
      );

      localStorage.setItem($LOCAL_MESSAGES_KEY, JSON.stringify(result));

      return {
        messages: result,
      };
    }),
}));
