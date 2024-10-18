import { ChatRoomFooter } from "@/widgets/chatroom-footer";
import { ChatRoomHeader } from "@/widgets/chatroom-header";
import { Conversation } from "@/widgets/conversation";
import { FC } from "react";

export const ChatRoom: FC = () => {
  return (
    <>
      <ChatRoomHeader />
      <Conversation />
      <ChatRoomFooter />
    </>
  );
};
