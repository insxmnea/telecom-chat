import { HomePage } from "@/pages/homepage";
import { FC } from "react";

type Props = {
  children?: React.ReactNode;
};

const App: FC<Props> = () => {
  return <HomePage />;
};

export default App;
