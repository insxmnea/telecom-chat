"use client";

import { FC, useEffect, useRef } from "react";
import styles from "./Conversation.module.scss";
import { MessageBubble } from "@/widgets/message-bubble";
import { useMessagesStore } from "@/entities/message";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { useStore } from "@/shared";
import { useSessionStore } from "@/entities/session";
import { UserMessageBubble } from "@/widgets/user-message-bubble";

dayjs.extend(localizedFormat);

export const Conversation: FC = () => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messages = useStore(useMessagesStore, (state) => state.messages);

  const currentUserId = useSessionStore((state) => state.currentUserId);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.date}>{dayjs(new Date()).format("L")}</div>

      {messages?.map((message) =>
        message.userId === currentUserId ? (
          <UserMessageBubble
            key={message.id}
            message={message}
            messageTime={dayjs(message.createdAt).format("LT")}
          />
        ) : (
          <MessageBubble
            key={message.id}
            message={message}
            messageTime={dayjs(message.createdAt).format("LT")}
          />
        )
      )}

      <div ref={messagesEndRef} />
    </div>
  );
};
