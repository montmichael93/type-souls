/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { type Dispatch, type SetStateAction } from "react";
import { useGame } from "./GameProvider";
import { useAuth } from "./Authprovider";

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
    bossData,
    selectedBoss,
    setSelectedBoss,
    setActiveComponent,
    patchPlayerDead,
    patchPlayerSurvived,
  } = useGame();

  const levelIncrease =
    bossData && selectedBoss && bossData[selectedBoss]?.levelUp;

  const soulsIncrease =
    bossData && selectedBoss && bossData[selectedBoss]?.reward;

  console.log(playerInfo);

  const deathScreen = [
    `bg-GwynDefeat`,
    `bg-NashandraDefeat`,
    `bg-SoulOfCinderDefeat`,
  ];

  const victoryScreen = [
    `bg-GwynVictory`,
    `bg-NashandraVictory`,
    `bg-SoulOfCinderVictory`,
  ];

  return (
    <>
      {didPlayerDie && (
        <>
          <main
            className={` flex min-h-screen flex-col items-center justify-center border-r-2 ${deathScreen[selectedBoss!]} bg-cover bg-center px-24`}
            /*
            style={
              {
                backgroundImage: `url(${deathScreen[selectedBoss]})`
              }
            }*/
          >
            <div
              className=" place-self-end border-[0.1rem] border-solid border-[white] bg-black p-4 font-kode-mono text-red-900"
              onClick={() => {
                playerInfo &&
                  patchPlayerDead(playerInfo?.id)
                    .then(() => {
                      setSelectedBoss(-1);
                      setActiveComponent("main-menu");
                      setDidPlayerDie(false);
                      setCorrectCount(0);
                      setIncorrectCount(0);
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
            className={` flex min-h-screen flex-col items-center justify-center border-r-2 ${victoryScreen[selectedBoss!]} bg-cover bg-center px-24`}
          >
            <div
              className=" translate-y-[-10rem] transform place-self-end border-[0.1rem] border-solid border-[white] bg-black p-4 font-kode-mono text-red-900"
              onClick={() => {
                playerInfo &&
                  patchPlayerSurvived(
                    playerInfo,
                    bossData[selectedBoss!].levelUp,
                    bossData[selectedBoss!].reward,
                  )
                    .then(() => {
                      setSelectedBoss(null);
                      setActiveComponent("main-menu");
                      setDidPlayerSurvive(false);
                      setCorrectCount(0);
                      setIncorrectCount(0);
                    })
                    .catch((e) => {
                      console.log(e);
                    });

                console.log(levelIncrease);
                console.log(soulsIncrease);
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
