import { FC } from "react";
import styles from "./MessageBubble.module.scss";
import { Avatar } from "antd";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { useUsersStore } from "@/entities/user";
import { useSessionStore } from "@/entities/session";
import { CheckmarkIcon } from "@/shared/ui/CheckmarkIcon";

type Props = {
  text: string;
  time: Date;
  userId: number;
};

dayjs.extend(localizedFormat);

export const MessageBubble: FC<Props> = (props) => {
  const users = useUsersStore((state) => state.users);
  const user = users.find((user) => user.id === props.userId);

  const currentUserId = useSessionStore((state) => state.currentUserId);

  const messageTime = dayjs(props.time).format("LT");

  if (props.userId === currentUserId) {
    return (
      <div className={styles.wrapper + " " + styles.right}>
        <div className={styles.userBubble}>
          <div className={styles.message}>
            <span className={styles.text}>{props.text}</span>
          </div>
          <span className={styles.time}>
            {messageTime}
            <CheckmarkIcon />
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <Avatar size={32} src={user?.avatar} />
      <div className={styles.bubble}>
        <div className={styles.message}>
          <div className={styles.info}>
            <span className={styles.name}>{user?.name}</span>
            <span className={styles.role}>{user?.role}</span>
          </div>
          <span className={styles.text}>{props.text}</span>
        </div>
        <span className={styles.time}>{messageTime}</span>
      </div>
    </div>
  );
};
