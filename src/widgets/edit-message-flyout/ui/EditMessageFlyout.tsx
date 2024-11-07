import { FC } from "react";
import styles from "./EditMessageFlyout.module.scss";
import { useMessagesStore } from "@/entities/message";
import { Button } from "antd";
import { CloseOutlined, EditOutlined } from "@ant-design/icons";

type Props = {
  text: string;
};

export const EditMessageFlyout: FC<Props> = ({ text }) => {
  const { stopEditing } = useMessagesStore();

  const onClose = () => {
    stopEditing();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <EditOutlined />

        <div className={styles.info}>
          <div className={styles.title}>Edit message</div>
          <div className={styles.text}>{text}</div>
        </div>
      </div>

      <Button
        color="default"
        variant="link"
        size="small"
        icon={<CloseOutlined />}
        onClick={onClose}
      />
    </div>
  );
};
