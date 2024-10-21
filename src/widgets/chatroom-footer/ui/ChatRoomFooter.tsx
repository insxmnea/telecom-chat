"use client";

import {
  PaperClipOutlined,
  SendOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";
import { FC, useState } from "react";
import styles from "./ChatRoomFooter.module.scss";
import { useMessagesStore } from "@/entities/message";

export const ChatRoomFooter: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const addMessage = useMessagesStore((state) => state.addMessage);

  const onSubmit = () => {
    setInputValue("");

    addMessage({
      id: `msg-${Date.now()}-1`,
      text: "Hello World!",
      userId: 1,
      createdAt: new Date(),
    });

    addMessage({
      id: `msg-${Date.now()}-101`,
      text: inputValue,
      userId: 101,
      createdAt: new Date(),
    });
  };

  return (
    <div className={styles.wrapper}>
      <Input
        placeholder="Start typing..."
        prefix={<SmileOutlined />}
        variant="borderless"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onPressEnter={onSubmit}
      />
      <Button ghost type="primary" icon={<PaperClipOutlined />} />

      <Button ghost type="primary" icon={<SendOutlined />} onClick={onSubmit} />
    </div>
  );
};
