import { FC } from "react";
import { Avatar, Badge } from "antd";
import styles from "./MessageBubble.module.scss";
import { useUsersStore } from "@/entities/user";
import { Message } from "@/entities/message";

type Props = {
  message: Message;
  messageTime: string;
};

export const MessageBubble: FC<Props> = ({ message, messageTime }) => {
  const users = useUsersStore((state) => state.users);
  const user = users.find((user) => user.id === message.userId);

  return (
    <div className={styles.wrapper}>
      <Badge dot={user?.isOnline} color="#34C759" offset={[-5, 28]}>
        <Avatar size={32} src={user?.avatar} />
      </Badge>
      <div className={styles.bubble}>
        <div className={styles.message}>
          <div className={styles.info}>
            <span className={styles.name}>{user?.name}</span>
            <span className={styles.role}>{user?.role}</span>
          </div>
          <span className={styles.text}>{message.text}</span>
        </div>
        <span className={styles.time}>{messageTime}</span>
      </div>
    </div>
  );
};
