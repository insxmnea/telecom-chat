import { FC } from "react";
import styles from "./MessageBubble.module.scss";
import { Avatar } from "antd";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { useUsersStore } from "@/entities/user/model/users-store";

type Props = {
  text: string;
  time: Date;
  userId: number;
};

dayjs.extend(localizedFormat);

export const MessageBubble: FC<Props> = (props) => {
  const users = useUsersStore((state) => state.users);
  const user = users.find((user) => user.id === props.userId);

  return (
    <div className={styles.wrapper}>
      <Avatar size={32} src={user?.avatar} />
      <div className={styles.bubble}>
        <div className={styles.info}>
          <span className={styles.name}>{user?.name}</span>
          <span className={styles.role}>{user?.role}</span>
        </div>
        <span className={styles.text}>{props.text}</span>
        <span className={styles.time}>{dayjs(props.time).format("LT")}</span>
      </div>
    </div>
  );
};
