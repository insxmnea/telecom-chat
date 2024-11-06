type Message = {
  id: string;
  text: string;
  userId: number;
  createdAt: Date;
};

type MessagesState = {
  messages: Message[];
  addMessage: (message: Message) => void;
  editMessage: (message: Message) => void;
  deleteMessage: (message: string) => void;
};

export type { Message, MessagesState };
