//import { useState } from "react";

import { type Dispatch, type SetStateAction } from "react";
import { BossesMenu } from "./BossesMenu";

export const MainMenu = ({
  isBonFireLit,
  engagedInCombat,
  bossMenuSelected,
  selectedBoss,
  didPlayerDie,
  didPlayerSurvive,
  setBossMenuSelected,
  setEngagedInCombat,
  setSelectedBoss,
  setIsBonFireLit,
  setDidPlayerDie,
  setDidPlayerSurvive,
}: {
  isBonFireLit: boolean;
  engagedInCombat: boolean;
  bossMenuSelected: boolean;
  selectedBoss: number;
  didPlayerDie: boolean;
  didPlayerSurvive: boolean;
  setBossMenuSelected: Dispatch<SetStateAction<boolean>>;
  setEngagedInCombat: Dispatch<SetStateAction<boolean>>;
  setSelectedBoss: Dispatch<SetStateAction<number>>;
  setIsBonFireLit: Dispatch<SetStateAction<boolean>>;
  setDidPlayerDie: Dispatch<SetStateAction<boolean>>;
  setDidPlayerSurvive: Dispatch<SetStateAction<boolean>>;
}) => {
  /*
  const mainMenuDisplay =
    isBonFireLit &&
    !bossMenuSelected &&
    !engagedInCombat &&
    !didPlayerDie &&
    !didPlayerSurvive;*/

  return (
    <>
      {isBonFireLit && !bossMenuSelected && (
        <div className="flex justify-between gap-x-[30rem] text-white">
          <div
            className=" w-40  border-[0.1rem] border-solid border-[white] p-4 text-center text-white"
            onClick={() => {
              setBossMenuSelected(true);
            }}
          >
            <button>Bosses</button>
          </div>
          <div className="w-40  transform border-[0.1rem] border-solid border-[white] p-4 text-center text-white">
            <button>LeaderBoards</button>
          </div>
        </div>
      )}

      {bossMenuSelected && (
        <BossesMenu
          selectedBoss={selectedBoss}
          engagedInCombat={engagedInCombat}
          didPlayerDie={didPlayerDie}
          didPlayerSurvive={didPlayerSurvive}
          setEngagedInCombat={setEngagedInCombat}
          setBossMenuSelected={setBossMenuSelected}
          setSelectedBoss={setSelectedBoss}
          setIsBonFireLit={setIsBonFireLit}
          setDidPlayerDie={setDidPlayerDie}
          setDidPlayerSurvive={setDidPlayerSurvive}
        />
      )}
    </>
  );
};
