import { FC } from "react";
import styles from "./Message.module.scss";
import { Avatar, Badge } from "antd";
import { useUsersStore } from "@/entities/user";

type Props = {
  text: string;
  messageTime: string;
  userId: number;
};

export const Message: FC<Props> = (props) => {
  const users = useUsersStore((state) => state.users);
  const user = users.find((user) => user.id === props.userId);

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
          <span className={styles.text}>{props.text}</span>
        </div>
        <span className={styles.time}>{props.messageTime}</span>
      </div>
    </div>
  );
};
