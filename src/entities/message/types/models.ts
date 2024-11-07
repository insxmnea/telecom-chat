type Message = {
  id: string;
  text: string;
  userId: number;
  createdAt: Date;
};

type MessagesState = {
  messages: Message[];
  editMessageId: string | null;
  addMessage: (message: Message) => void;
  startEditing: (id: string) => void;
  stopEditing: () => void;
  updateMessage: (id: string, text: string) => void;
  deleteMessage: (message: string) => void;
};

export type { Message, MessagesState };
