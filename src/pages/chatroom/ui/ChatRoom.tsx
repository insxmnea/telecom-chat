import { ChatRoomFooter } from "@/widgets/chatroom-footer";
import { ChatRoomHeader } from "@/widgets/chatroom-header";
import { Conversation } from "@/widgets/conversation";
import { FC } from "react";
import styles from "./ChatRoom.module.scss";

export const ChatRoom: FC = () => {
  return (
    <div className={styles.wrapper}>
      <ChatRoomHeader />
      <Conversation />
      <ChatRoomFooter />
    </div>
  );
};
