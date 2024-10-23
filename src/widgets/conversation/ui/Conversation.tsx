"use client";

import { FC } from "react";
import styles from "./Conversation.module.scss";
import { MessageBubble } from "@/widgets/message-bubble";
import { useMessagesStore } from "@/entities/message";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

export const Conversation: FC = () => {
  const messages = useMessagesStore((state) => state.messages);

  return (
    <div className={styles.wrapper}>
      <div className={styles.date}>{dayjs(new Date()).format("L")}</div>
      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          text={message.text}
          time={message.createdAt}
          userId={message.userId}
        />
      ))}
    </div>
  );
};
