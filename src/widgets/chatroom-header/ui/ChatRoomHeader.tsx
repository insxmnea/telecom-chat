"use client";

import { FC } from "react";
import styles from "./ChatRoomHeader.module.scss";
import { EllipsisOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

export const ChatRoomHeader: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Avatar.Group>
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=4" />
      </Avatar.Group>
      <div className={styles.info}>
        <span className={styles.title}>🦄 Team Unicorns</span>
        <span className={styles.subtitle}>last seen 45 minutes ago</span>
      </div>
      <EllipsisOutlined />
    </div>
  );
};
