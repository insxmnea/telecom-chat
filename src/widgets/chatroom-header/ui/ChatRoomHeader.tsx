"use client";

import { FC } from "react";
import styles from "./ChatRoomHeader.module.scss";
import { EllipsisOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { useUsersStore } from "@/entities/user/model/users-store";

export const ChatRoomHeader: FC = () => {
  const users = useUsersStore((state) => state.users);

  return (
    <div className={styles.wrapper}>
      <Avatar.Group>
        {users.map((user) => (
          <Avatar key={user.id} src={user.avatar} />
        ))}
      </Avatar.Group>
      <div className={styles.info}>
        <span className={styles.title}>🦄 Team Unicorns</span>
        <span className={styles.subtitle}>last seen 45 minutes ago</span>
      </div>
      <EllipsisOutlined />
    </div>
  );
};
