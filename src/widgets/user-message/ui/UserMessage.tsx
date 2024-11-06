import { FC } from "react";
import styles from "./UserMessage.module.scss";
import { CheckmarkIcon } from "@/shared/ui/CheckmarkIcon";
import { Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

type Props = {
  text: string;
  messageTime: string;
};

export const UserMessage: FC<Props> = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bubble}>
        <div className={styles.message}>
          <span className={styles.text}>{props.text}</span>
        </div>
        <span className={styles.time}>
          {props.messageTime}
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
        />
      </div>
    </div>
  );
};
