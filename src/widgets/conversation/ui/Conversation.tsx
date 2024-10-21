import { FC } from "react";
import styles from "./Conversation.module.scss";
import { MessageBubble } from "@/widgets/message-bubble";

export const Conversation: FC = () => {
  return (
    <div className={styles.wrapper}>
      <MessageBubble text="Hello, World!" isMine={true} time="12:00" />
    </div>
  );
};
