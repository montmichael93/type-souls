//import { useState } from "react";
import { useGame } from "./GameProvider";
import { useAuth } from "./Authprovider";
import { useState } from "react";

export const MainMenu = () => {
  const { player } = useGame();
  const [isBonFireLit, setIsBonFireLit] = useState(false);

  const { playerInfo } = useAuth();
  const {
    activeComponent,
    setActiveComponent,
    setPlayerMessages,
    retrievePlayerMessages,
  } = useGame();

  return (
    <>
      {activeComponent === "abyss" && (
        <main
          className={` flex min-h-screen flex-col items-center justify-center border-r-2 bg-black bg-cover bg-center px-24`}
        >
          <div>
            <h1 className="translate-y-[-1rem] font-kode-mono text-5xl font-extrabold tracking-tight text-red-900 sm:text-[5rem]"></h1>
          </div>

          <div
            className="border-[0.1rem] border-solid border-[white] p-4 text-white"
            onClick={() => {
              setIsBonFireLit(!isBonFireLit);
              setActiveComponent("main-menu");
              player?.start();
            }}
          >
            <button>Click to light bonfire</button>
          </div>
        </main>
      )}

      {activeComponent === "main-menu" && (
        <main
          //onMouseEnter={playMusic}
          className={` bg-bonfireThree flex min-h-screen flex-col items-center justify-center border-r-2 bg-cover bg-center px-24`}
        >
          <div>
            <h1 className="translate-y-[-1rem] text-center font-kode-mono text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              <span>Type Souls</span>
            </h1>
          </div>

          <div
            className=" flex  w-40 self-baseline border-[0.1rem] border-solid border-[white] p-4 text-center font-kode-mono text-white"
            onClick={() => {
              setActiveComponent("boss-menu");
            }}
          >
            <button>Bosses</button>
          </div>

          {!playerInfo?.leftReview && (
            <div
              className=" flex  w-40 self-baseline border-[0.1rem] border-solid p-4 text-center font-kode-mono text-white"
              onClick={() => {
                !playerInfo?.leftReview && setActiveComponent("review");
              }}
            >
              <button>leave a review</button>
            </div>
          )}

          <div
            className="w-40  self-end border-[0.1rem] border-solid border-[white] p-4 text-center font-kode-mono text-white"
            onClick={() => {
              //setLeaderBoardSelected(true);
              setActiveComponent("leaderBoard");
            }}
          >
            <button>LeaderBoards</button>
          </div>

          <div
            className="w-40 self-end border-[0.1rem] border-solid border-[white] p-4 text-center font-kode-mono text-white"
            onClick={() => {
              retrievePlayerMessages()
                .then((messages) => {
                  setPlayerMessages(messages);
                })
                .catch((error) => {
                  console.log(error);
                });

              setActiveComponent("messages");
            }}
          >
            <button>Messages</button>
          </div>

          <div
            className="self-baseline font-kode-mono text-white"
            style={{ alignSelf: "center" }}
          >
            <span>{playerInfo?.name} </span>
            <span>level: {playerInfo?.level} </span>
            <span>souls: {playerInfo?.souls} </span>
          </div>
          <div
            className="self-baseline border-[0.1rem] border-solid border-[white] p-4 text-center text-white"
            onClick={() => {
              setIsBonFireLit(false);
              setActiveComponent("landing-page");
              player?.stop();
            }}
          >
            <button>Log Out</button>
          </div>
        </main>
      )}
    </>
  );
};
