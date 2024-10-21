import { FC } from "react";
import styles from "./MessageBubble.module.scss";
import { Avatar } from "antd";
import dayjs from "dayjs";

type Props = {
  text: string;
  isMine: boolean;
  time: string;
  role?: string;
  name?: string;
  avatar?: string;
  isOnline?: boolean;
};

export const MessageBubble: FC<Props> = (props) => {
  return (
    <div className={styles.wrapper}>
      <Avatar size={32} src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
      <div className={styles.bubble}>
        <div className={styles.info}>
          <span className={styles.name}>Aubrey</span>
          <span className={styles.role}>Engineering</span>
        </div>
        <span className={styles.text}>{props.text}</span>
        <span className={styles.time}>{dayjs().format(props.time)}</span>
      </div>
    </div>
  );
};
