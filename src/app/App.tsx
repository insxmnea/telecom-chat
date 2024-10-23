import { HomePage } from "@/pages/homepage";
import { FC } from "react";
import { Providers } from "./providers";

const App: FC = () => {
  return (
    <Providers>
      <HomePage />
    </Providers>
  );
};

export default App;
