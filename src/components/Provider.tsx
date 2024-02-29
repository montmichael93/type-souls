import { type BossData, type ActiveComponent } from "none/utils/types";
import { bossData } from "public/bosses-data";
import {
  type ReactNode,
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

type TGameProvider = {
  bossData: BossData[];
  activeComponent: ActiveComponent;
  setActiveComponent: Dispatch<SetStateAction<ActiveComponent>>;
};

const GameContext = createContext<TGameProvider>({} as TGameProvider);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [activeComponent, setActiveComponent] =
    useState<ActiveComponent>("landing-page");

  return (
    <GameContext.Provider
      value={{ bossData, activeComponent, setActiveComponent }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
