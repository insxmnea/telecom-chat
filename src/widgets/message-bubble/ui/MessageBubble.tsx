import { FC } from "react";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { useSessionStore } from "@/entities/session";
import { Message } from "@/widgets/message/ui/Message";
import { UserMessage } from "@/widgets/user-message";

type Props = {
  text: string;
  time: Date;
  userId: number;
};

dayjs.extend(localizedFormat);

export const MessageBubble: FC<Props> = (props) => {
  const currentUserId = useSessionStore((state) => state.currentUserId);

  const messageTime = dayjs(props.time).format("LT");

  if (props.userId === currentUserId) {
    return <UserMessage text={props.text} messageTime={messageTime} />;
  }

  return (
    <Message
      text={props.text}
      messageTime={messageTime}
      userId={props.userId}
    />
  );
};
