import { FC } from "react";
import styles from "./UserMessageBubble.module.scss";
import { CheckmarkIcon } from "@/shared/ui/CheckmarkIcon";
import { Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Message, useMessagesStore } from "@/entities/message";

type Props = {
  message: Message;
  messageTime: string;
};

export const UserMessageBubble: FC<Props> = ({ message, messageTime }) => {
  const deleteMessage = useMessagesStore((state) => state.deleteMessage);

  const onDeleteMessage = () => {
    deleteMessage(message.id);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.bubble}>
        <div className={styles.message}>
          <span className={styles.text}>{message.text}</span>
        </div>
        <span className={styles.time}>
          {messageTime}
          <CheckmarkIcon />
        </span>
      </div>
      <div className={styles.actions}>
        <Button
          color="default"
          variant="link"
          size="small"
          icon={<EditOutlined className={styles.icon} />}
        />
        <Button
          color="default"
          variant="link"
          size="small"
          icon={<DeleteOutlined className={styles.icon} />}
          onClick={onDeleteMessage}
        />
      </div>
    </div>
  );
};
