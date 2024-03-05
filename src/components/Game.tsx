import { useState } from "react";
import { MainMenu } from "./MainMenu";
import { LogInSignUp } from "./LogInSignUp";
import { useGame } from "./GameProvider";
import { BossesMenu } from "./BossesMenu";
import { LeaderBoard } from "./LeaderBoard";
import { Messages } from "./Messages";
import { CombatScreen } from "./CombatScreen";
import { CombatResults } from "./CombatResults";
import { ReviewPage } from "./LeaveAReview";

export const Game = () => {
  const { activeComponent, playerMessages, setActiveComponent } = useGame();

  const [isBonFireLit, setIsBonFireLit] = useState(false);
  //const [selectedBoss, setSelectedBoss] = useState<number | null>(null);
  const [didPlayerDie, setDidPlayerDie] = useState(false);
  const [didPlayerSurvive, setDidPlayerSurvive] = useState(false);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const setLargeText = !isBonFireLit ? "" : "Type Souls";

  const revealSignUpAndLogIn =
    activeComponent === "landing-page" ||
    activeComponent === "sign-up" ||
    activeComponent === "log-in" ||
    activeComponent === "review-page";

  return (
    <>
      {revealSignUpAndLogIn && <LogInSignUp />}

      {activeComponent === "abyss" && (
        <main
          className={` flex min-h-screen flex-col items-center justify-center border-r-2 bg-black bg-cover bg-center px-24`}
        >
          <div>
            <h1 className="translate-y-[-1rem] font-kode-mono text-5xl font-extrabold tracking-tight text-red-900 sm:text-[5rem]">
              <span>{setLargeText}</span>
            </h1>
          </div>

          <div
            hidden={isBonFireLit}
            className="border-[0.1rem] border-solid border-[white] p-4 text-white"
            onClick={() => {
              setIsBonFireLit(true);
              setActiveComponent("main-menu");
            }}
          >
            <button hidden={isBonFireLit}>Click to light bonfire</button>
          </div>
        </main>
      )}

      {activeComponent === "main-menu" && <MainMenu />}

      {activeComponent === "boss-menu" && <BossesMenu />}

      {activeComponent === "leaderBoard" && <LeaderBoard />}

      {activeComponent === "messages" && (
        <Messages playerMessages={playerMessages} />
      )}

      {activeComponent === "review" && <ReviewPage />}

      {activeComponent === "combat" && (
        <CombatScreen
          correctCount={correctCount}
          incorrectCount={incorrectCount}
          didPlayerDie={didPlayerDie}
          didPlayerSurvive={didPlayerSurvive}
          setCorrectCount={setCorrectCount}
          setIncorrectCount={setIncorrectCount}
          setDidPlayerDie={setDidPlayerDie}
          setDidPlayerSurvive={setDidPlayerSurvive}
        />
      )}

      {activeComponent === "combat-outcome" && (
        <CombatResults
          didPlayerDie={didPlayerDie}
          didPlayerSurvive={didPlayerSurvive}
          setCorrectCount={setCorrectCount}
          setIncorrectCount={setIncorrectCount}
          setDidPlayerDie={setDidPlayerDie}
          setDidPlayerSurvive={setDidPlayerSurvive}
        />
      )}
    </>
  );
};
