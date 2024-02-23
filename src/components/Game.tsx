import { useState } from "react";
import { MainMenu } from "./MainMenu";
import { useGame } from "./Provider";
//import { usePlayer } from "none/utils/UsePlayer";

export const Game = () => {
  const { bossData } = useGame();
  const [isBonFireLit, setIsBonFireLit] = useState(false);
  const [bossMenuSelected, setBossMenuSelected] = useState(false);
  const [selectedBoss, setSelectedBoss] = useState<number>(-1);
  const [engagedInCombat, setEngagedInCombat] = useState(false);
  const [didPlayerDie, setDidPlayerDie] = useState(false);
  const [didPlayerSurvive, setDidPlayerSurvive] = useState(false);

  const onStartScreen = !isBonFireLit && !engagedInCombat;
  const onMainMenu = !onStartScreen && !engagedInCombat;
  const combatAftermath = didPlayerDie || didPlayerSurvive;

  const combatLocation = [`bg-Lodran`, `bg-Drangleic`, `bg-Lothric`, ``];

  const victoryArray = [
    `bg-GwynVictory`,
    `bg-NashandraVictory`,
    `bg-SoulOfCinderVictory`,
  ];

  const defeatArray = [
    `bg-GwynDefeat`,
    `bg-NashandraDefeat`,
    `bg-SoulOfCinderDefeat`,
  ];

  /*
  const clickToStart = () => {
    if (isBonFireLit) {
      return true;
    } else if (
      (!isBonFireLit && didPlayerDie) ||
      (!isBonFireLit && didPlayerSurvive)
    ) {
      return true;
    }
  };*/

  const setBackGround = onStartScreen
    ? `bg-black`
    : isBonFireLit && onMainMenu
      ? `bg-[url("/bonfire.jpg")]`
      : selectedBoss > -1 && combatAftermath
        ? didPlayerDie
          ? defeatArray[selectedBoss]
          : victoryArray[selectedBoss]
        : combatLocation[selectedBoss];

  const setLargeText = onStartScreen
    ? ""
    : isBonFireLit && onMainMenu
      ? "Type Souls"
      : selectedBoss > -1 && combatAftermath
        ? ""
        : bossData[selectedBoss]?.name;
  //const player = usePlayer();
  /*
  const playTheme = () => {
    if (isBonFireLit) {
      player?.stop();
    } else {
      player?.start();
    }
  };*/

  return (
    <>
      <main
        className={` flex min-h-screen flex-col items-center justify-center border-r-2 bg-cover bg-center px-24 ${setBackGround}`}
      >
        <div>
          <h1 className=" font-kode translate-y-[-1rem] text-5xl font-extrabold tracking-tight text-red-900 sm:text-[5rem] ">
            <span>{setLargeText}</span>
          </h1>
        </div>

        <MainMenu
          isBonFireLit={isBonFireLit}
          engagedInCombat={engagedInCombat}
          bossMenuSelected={bossMenuSelected}
          selectedBoss={selectedBoss}
          didPlayerDie={didPlayerDie}
          didPlayerSurvive={didPlayerSurvive}
          setSelectedBoss={setSelectedBoss}
          setBossMenuSelected={setBossMenuSelected}
          setEngagedInCombat={setEngagedInCombat}
          setIsBonFireLit={setIsBonFireLit}
          setDidPlayerDie={setDidPlayerDie}
          setDidPlayerSurvive={setDidPlayerSurvive}
        />

        <div
          hidden={isBonFireLit}
          className="border-[0.1rem] border-solid border-[white] p-4 text-white"
          onClick={() => {
            setIsBonFireLit(true);
            //playTheme();
          }}
        >
          <button hidden={isBonFireLit}>Click to light bonfire</button>
        </div>
      </main>
    </>
  );
};
