import { type Dispatch, type SetStateAction } from "react";
import { useGame } from "./Provider";

export const CombatResults = ({
  didPlayerDie,
  didPlayerSurvive,
  selectedBoss,
  setCorrectCount,
  setIncorrectCount,
  setDidPlayerDie,
  setDidPlayerSurvive,
  setSelectedBoss,
  setEngagedInCombat,
  setBossMenuSelected,
}: {
  didPlayerDie: boolean;
  didPlayerSurvive: boolean;
  selectedBoss: number | null;
  setCorrectCount: Dispatch<SetStateAction<number>>;
  setIncorrectCount: Dispatch<SetStateAction<number>>;
  setSelectedBoss: Dispatch<SetStateAction<number | null>>;
  setDidPlayerDie: Dispatch<SetStateAction<boolean>>;
  setDidPlayerSurvive: Dispatch<SetStateAction<boolean>>;
  setEngagedInCombat: Dispatch<SetStateAction<boolean>>;
  setBossMenuSelected: Dispatch<SetStateAction<boolean>>;
}) => {
  const { bossData } = useGame();
  return (
    <>
      {didPlayerDie && (
        <>
          <main
            className={` flex min-h-screen flex-col items-center justify-center border-r-2 ${bossData[selectedBoss!]?.defeatImage} bg-cover bg-center px-24`}
          >
            <div
              className=" font-kode-mono place-self-end border-[0.1rem] border-solid border-[white] bg-black p-4 text-red-900"
              onClick={() => {
                setSelectedBoss(null);
                setBossMenuSelected(false);
                setEngagedInCombat(false);
                setDidPlayerDie(false);
                setCorrectCount(0);
                setIncorrectCount(0);
              }}
            >
              <button>return to main menu</button>
            </div>

            <div className="text-[10rem] text-[darkred]">
              <h1>You Died</h1>
            </div>
          </main>
        </>
      )}
      {didPlayerSurvive && (
        <>
          <main
            className={` flex min-h-screen flex-col items-center justify-center border-r-2 ${bossData[selectedBoss!]?.victoryImage} bg-cover bg-center px-24`}
          >
            <div
              className=" font-kode-mono translate-y-[-10rem] transform place-self-end border-[0.1rem] border-solid border-[white] bg-black p-4 text-red-900"
              onClick={() => {
                setSelectedBoss(null);
                setBossMenuSelected(false);
                setEngagedInCombat(false);
                setDidPlayerSurvive(false);
                setCorrectCount(0);
                setIncorrectCount(0);
              }}
            >
              <button>Return To Main Menu</button>
            </div>

            <div className="text-[10rem] text-[darkred]">
              <h1>Victory Achieved</h1>
            </div>
          </main>
        </>
      )}
    </>
  );
};
