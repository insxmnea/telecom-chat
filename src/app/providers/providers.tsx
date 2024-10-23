import { AntdRegistry } from "@ant-design/nextjs-registry";
import { FC } from "react";

type Props = {
  children: React.ReactNode;
};

export const Providers: FC<Props> = ({ children }) => {
  return <AntdRegistry>{children}</AntdRegistry>;
};
