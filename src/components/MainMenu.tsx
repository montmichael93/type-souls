//import { useState } from "react";

import { type Dispatch, type SetStateAction } from "react";
import { BossesMenu } from "./BossesMenu";

export const MainMenu = ({
  isBonFireLit,
  engagedInCombat,
  bossMenuSelected,
  selectedBoss,
  setBossMenuSelected,
  setEngagedInCombat,
  setSelectedBoss,
}: {
  isBonFireLit: boolean;
  engagedInCombat: boolean;
  bossMenuSelected: boolean;
  selectedBoss: number;
  setBossMenuSelected: Dispatch<SetStateAction<boolean>>;
  setEngagedInCombat: Dispatch<SetStateAction<boolean>>;
  setSelectedBoss: Dispatch<SetStateAction<number>>;
}) => {
  //const [bossMenuSelected, setBossMenuSelected] = useState(false);
  //const [leaderBoardMenuSelected, setLeaderBoardSelected] = useState(false)
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
          setEngagedInCombat={setEngagedInCombat}
          setBossMenuSelected={setBossMenuSelected}
          setSelectedBoss={setSelectedBoss}
        />
      )}
    </>
  );
};
