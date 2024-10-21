import {
  PaperClipOutlined,
  SendOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";
import { FC } from "react";
import styles from "./ChatRoomFooter.module.scss";

export const ChatRoomFooter: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Input
        placeholder="Start typing..."
        prefix={<SmileOutlined />}
        variant="borderless"
      />
      <Button ghost type="primary" icon={<PaperClipOutlined />} />

      <Button ghost type="primary" icon={<SendOutlined />} />
    </div>
  );
};
