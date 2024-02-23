import { type Dispatch, type SetStateAction } from "react";
import { useGame } from "./Provider";
import Image from "next/image";
import { CombatScreen } from "./CombatScreen";

export const BossesMenu = ({
  engagedInCombat,
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
  engagedInCombat: boolean;
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
  const { bossData } = useGame();

  return (
    <>
      {!engagedInCombat && (
        <>
          <div
            className=" translate-y-[-4rem] transform place-self-end border-[0.1rem] border-solid border-[white] p-4 text-white"
            onClick={() => {
              setBossMenuSelected(false);
            }}
          >
            <button>return to main menu</button>
          </div>

          <div className=" flex gap-x-40 text-center text-white">
            {bossData.map((boss) => {
              return (
                <div
                  key={boss.id}
                  onClick={() => {
                    setSelectedBoss(boss.id);
                    setEngagedInCombat(true);
                  }}
                >
                  <h2 className="text-[1.5rem]">{boss.name}</h2>
                  <Image
                    src={boss.bossMenuImage}
                    alt=""
                    width={300}
                    height={300}
                  />
                </div>
              );
            })}
          </div>
        </>
      )}

      {engagedInCombat && (
        <CombatScreen
          selectedBoss={selectedBoss}
          engagedInCombat={engagedInCombat}
          didPlayerDie={didPlayerDie}
          didPlayerSurvive={didPlayerSurvive}
          setBossMenuSelected={setBossMenuSelected}
          setSelectedBoss={setSelectedBoss}
          setEngagedInCombat={setEngagedInCombat}
          setIsBonFireLit={setIsBonFireLit}
          setDidPlayerDie={setDidPlayerDie}
          setDidPlayerSurvive={setDidPlayerSurvive}
        />
      )}
    </>
  );
};
