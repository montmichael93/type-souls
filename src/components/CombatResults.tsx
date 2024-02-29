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
}: {
  didPlayerDie: boolean;
  didPlayerSurvive: boolean;
  selectedBoss: number;
  setCorrectCount: Dispatch<SetStateAction<number>>;
  setIncorrectCount: Dispatch<SetStateAction<number>>;
  setSelectedBoss: Dispatch<SetStateAction<number>>;
  setDidPlayerDie: Dispatch<SetStateAction<boolean>>;
  setDidPlayerSurvive: Dispatch<SetStateAction<boolean>>;
}) => {
  const { bossData, setActiveComponent } = useGame();

  return (
    <>
      {didPlayerDie && (
        <>
          <main
            className={` flex min-h-screen flex-col items-center justify-center border-r-2 ${bossData[selectedBoss]?.victoryImage} bg-cover bg-center px-24`}
          >
            <div
              className=" place-self-end border-[0.1rem] border-solid border-[white] bg-black p-4 font-kode-mono text-red-900"
              onClick={() => {
                setSelectedBoss(-1);
                setActiveComponent("main-menu");
                setDidPlayerDie(false);
                setCorrectCount(0);
                setIncorrectCount(0);
              }}
            >
              <button>Return to Bonfire</button>
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
            className={` flex min-h-screen flex-col items-center justify-center border-r-2 ${bossData[selectedBoss]?.defeatImage} bg-cover bg-center px-24`}
          >
            <div
              className=" translate-y-[-10rem] transform place-self-end border-[0.1rem] border-solid border-[white] bg-black p-4 font-kode-mono text-red-900"
              onClick={() => {
                setSelectedBoss(-1);
                setActiveComponent("main-menu");
                setDidPlayerSurvive(false);
                setCorrectCount(0);
                setIncorrectCount(0);
              }}
            >
              <button>Return to Bonfire</button>
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
