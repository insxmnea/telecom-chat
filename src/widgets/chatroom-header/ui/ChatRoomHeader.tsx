import { FC } from "react";
import styles from "./ChatRoomHeader.module.scss";
import { EllipsisOutlined } from "@ant-design/icons";
import Image from "next/image";
import avatarSrc from "../../../shared/assets/images/__avatar_aubrey.png";

export const ChatRoomHeader: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.participants}>
        <Image src={avatarSrc} alt="logo" width={34} height={34} />
      </div>
      <div className={styles.info}>
        <span className={styles.title}>🦄 Team Unicorns</span>
        <span className={styles.subtitle}>last seen 45 minutes ago</span>
      </div>
      <EllipsisOutlined />
    </div>
  );
};
