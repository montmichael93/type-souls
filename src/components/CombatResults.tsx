/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */
import { type Dispatch, type SetStateAction } from "react";
import { useGame } from "./GameProvider";
import { useAuth } from "./Authprovider";
import { type Frequency } from "tone/build/esm/core/type/Units";

export const CombatResults = ({
  didPlayerDie,
  didPlayerSurvive,
  setCorrectCount,
  setIncorrectCount,
  setDidPlayerDie,
  setDidPlayerSurvive,
}: {
  didPlayerDie: boolean;
  didPlayerSurvive: boolean;
  setCorrectCount: Dispatch<SetStateAction<number>>;
  setIncorrectCount: Dispatch<SetStateAction<number>>;
  setDidPlayerDie: Dispatch<SetStateAction<boolean>>;
  setDidPlayerSurvive: Dispatch<SetStateAction<boolean>>;
}) => {
  const { playerInfo } = useAuth();
  const {
    player,
    sampler,
    bossData,
    selectedBoss,
    setSelectedBoss,
    setActiveComponent,
    patchPlayerDead,
    patchPlayerSurvived,
  } = useGame();

  return (
    <>
      {didPlayerDie && (
        <>
          <main
            className={` flex min-h-screen flex-col items-center justify-center border-r-2 bg-cover bg-center px-24`}
            style={{ backgroundImage: bossData[selectedBoss!]?.defeatImage }}
          >
            <div
              className=" place-self-end border-[0.1rem] border-solid border-[white] bg-black p-4 font-kode-mono text-red-900"
              onClick={() => {
                playerInfo &&
                  patchPlayerDead(playerInfo?.id)
                    .then(() => {
                      setSelectedBoss(null);
                      setActiveComponent("main-menu");
                      setDidPlayerDie(false);
                      setCorrectCount(0);
                      setIncorrectCount(0);
                      sampler?.triggerRelease(
                        bossData[selectedBoss!]?.bossThemeMusic as Frequency,
                      );
                      player?.start();
                    })
                    .catch((e) => {
                      console.log(e);
                    });
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
            className={` flex min-h-screen flex-col items-center justify-center border-r-2  bg-cover bg-center px-24`}
            style={{ backgroundImage: bossData[selectedBoss!]?.victoryImage }}
          >
            <div
              className="transform place-self-end border-[0.1rem] border-solid border-[white] bg-black p-4 font-kode-mono text-red-900"
              onClick={() => {
                playerInfo &&
                  patchPlayerSurvived(
                    playerInfo,
                    bossData[selectedBoss!]?.levelUp as number,
                    bossData[selectedBoss!]?.reward as number,
                  )
                    .then(() => {
                      setSelectedBoss(null);
                      setActiveComponent("main-menu");
                      setDidPlayerSurvive(false);
                      setCorrectCount(0);
                      setIncorrectCount(0);

                      sampler?.triggerRelease(
                        bossData[selectedBoss!]?.bossThemeMusic as Frequency,
                      );
                      player?.start();
                    })

                    .catch((e) => {
                      console.log(e);
                    });
              }}
            >
              <button>Return to Bonfire</button>
            </div>

            <div className="text-[8rem] text-[darkred]">
              <h1>Victory Achieved</h1>
            </div>
          </main>
        </>
      )}
    </>
  );
};
