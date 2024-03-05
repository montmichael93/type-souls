//import { useState } from "react";
import { useGame } from "./GameProvider";
import { useAuth } from "./Authprovider";

export const MainMenu = () => {
  const { playerInfo } = useAuth();
  const {
    activeComponent,
    setActiveComponent,
    setPlayerMessages,
    retrievePlayerMessages,
  } = useGame();

  console.log(playerInfo);

  return (
    <>
      {activeComponent === "main-menu" && (
        <main
          className={` flex min-h-screen flex-col items-center justify-center border-r-2 bg-bonfire bg-cover bg-center px-24`}
        >
          <div>
            <h1 className="translate-y-[-1rem] text-center font-kode-mono text-5xl font-extrabold tracking-tight text-red-900 sm:text-[5rem]">
              <span>Type Souls</span>
            </h1>
          </div>

          <div
            className=" flex  w-40 self-baseline border-[0.1rem] border-solid border-[white] p-4 text-center font-kode-mono text-white"
            onClick={() => {
              //setBossMenuSelected(true);
              setActiveComponent("boss-menu");
            }}
          >
            <button>Bosses</button>
          </div>

          <div
            hidden={playerInfo?.leftReview}
            className=" flex  w-40 self-baseline border-[0.1rem] border-solid p-4 text-center font-kode-mono text-white"
            onClick={() => {
              //setBossMenuSelected(true);
              !playerInfo?.leftReview && setActiveComponent("review");
            }}
          >
            <button hidden={playerInfo?.leftReview}>leave a review</button>
          </div>

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

          <div className="self-baseline bg-slate-800 p-2  font-kode-mono text-white">
            <span>{playerInfo?.name} </span>
            <span>level: {playerInfo?.level} </span>
            <span>souls: {playerInfo?.souls} </span>
          </div>
        </main>
      )}
    </>
  );
};
