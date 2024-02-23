import { type Dispatch, type SetStateAction } from "react";

export const CombatResults = ({
  correctCount,
  incorrectCount,
  didPlayerDie,
  didPlayerSurvive,
  setCorrectCount,
  setIncorrectCount,
  setDidPlayerDie,
  setDidPlayerSurvive,
  setSelectedBoss,
  setEngagedInCombat,
  setBossMenuSelected,
}: {
  correctCount: number;
  incorrectCount: number;
  didPlayerDie: boolean;
  didPlayerSurvive: boolean;
  setCorrectCount: Dispatch<SetStateAction<number>>;
  setIncorrectCount: Dispatch<SetStateAction<number>>;
  setSelectedBoss: Dispatch<SetStateAction<number>>;
  setDidPlayerDie: Dispatch<SetStateAction<boolean>>;
  setDidPlayerSurvive: Dispatch<SetStateAction<boolean>>;
  setEngagedInCombat: Dispatch<SetStateAction<boolean>>;
  setBossMenuSelected: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      {didPlayerDie && (
        <>
          <div
            className=" translate-y-[-10rem] transform place-self-end border-[0.1rem] border-solid border-[white] p-4 text-white"
            onClick={() => {
              setSelectedBoss(-1);
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
        </>
      )}
      {didPlayerSurvive && (
        <>
          <div
            className=" translate-y-[-10rem] transform place-self-end border-[0.1rem] border-solid border-[white] p-4 text-white"
            onClick={() => {
              setSelectedBoss(-1);
              setBossMenuSelected(false);
              setEngagedInCombat(false);
              setDidPlayerSurvive(false);
              setCorrectCount(0);
              setIncorrectCount(0);
            }}
          >
            <button>return to main menu</button>
          </div>

          <div className="text-[10rem] text-[darkred]">
            <h1>Victory Achieved</h1>
          </div>
        </>
      )}
    </>
  );
};
