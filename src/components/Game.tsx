import { useEffect, useState } from "react";
import { MainMenu } from "./MainMenu";
import { LogInSignUp } from "./LogInSignUp";
import { useGame } from "./GameProvider";
import { BossesMenu } from "./BossesMenu";
import { LeaderBoard } from "./LeaderBoard";
import { Messages } from "./Messages";
import { CombatScreen } from "./CombatScreen";
import { CombatResults } from "./CombatResults";
import { ReviewPage } from "./LeaveAReview";
import * as ls from "local-storage";
import { useAuth } from "./Authprovider";

export const Game = () => {
  const { setPlayerInfo } = useAuth();
  const { activeComponent, setActiveComponent } = useGame();
  const [didPlayerDie, setDidPlayerDie] = useState(false);
  const [didPlayerSurvive, setDidPlayerSurvive] = useState(false);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const revealSignUpAndLogIn =
    activeComponent === "landing-page" ||
    activeComponent === "sign-up" ||
    activeComponent === "log-in" ||
    activeComponent === "review-page";

  const revealMainMenu = activeComponent === "main-menu" || "abyss";

  useEffect(() => {
    if (ls.get("playerThatIsLoggedIn")) {
      setPlayerInfo(ls.get("playerThatIsLoggedIn"));
      setActiveComponent(activeComponent);
    }
  }, [activeComponent, setActiveComponent, setPlayerInfo]);

  return (
    <>
      {revealSignUpAndLogIn && <LogInSignUp />}
      {revealMainMenu && <MainMenu />}
      {activeComponent === "boss-menu" && <BossesMenu />}
      {activeComponent === "leaderBoard" && <LeaderBoard />}
      {activeComponent === "messages" && <Messages />}
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
