import { type BossData } from "none/utils/types";
import { bossData } from "public/bosses-data";
import { type ReactNode, createContext, useContext } from "react";

type TGameProvider = {
  bossData: BossData[];
};

const GameContext = createContext<TGameProvider>({} as TGameProvider);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  return (
    <GameContext.Provider value={{ bossData }}>{children}</GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
