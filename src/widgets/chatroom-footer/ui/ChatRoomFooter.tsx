"use client";

import { SendOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { FC, useState } from "react";
import styles from "./ChatRoomFooter.module.scss";
import { useMessagesStore } from "@/entities/message";
import classNames from "classnames";
import { AttachmentIcon } from "@/shared/ui";

export const ChatRoomFooter: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const addMessage = useMessagesStore((state) => state.addMessage);

  const onSubmit = () => {
    if (!inputValue) return;

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

    setInputValue("");
  };

  return (
    <div className={styles.wrapper}>
      <Button
        color="default"
        variant="link"
        icon={<SmileOutlined className={styles.buttonWithIcon} />}
      />

      <Input
        placeholder="Start typing..."
        variant="borderless"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onPressEnter={onSubmit}
      />
      <Button
        color="default"
        variant="link"
        icon={<AttachmentIcon className={styles.buttonWithIcon} />}
      />

      <Button
        color="default"
        variant="link"
        icon={
          <SendOutlined
            className={classNames(styles.sendIcon, {
              [styles.disabled]: !inputValue,
            })}
          />
        }
        onClick={onSubmit}
        disabled={!inputValue}
      />
    </div>
  );
};
