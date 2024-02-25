//import { useState } from "react";

import { useState } from "react";
import { BossesMenu } from "./BossesMenu";
import { LeaderBoard } from "./LeaderBoard";
import { Messages } from "./Messages";

export const MainMenu = () => {
  const [leaderBoardSelected, setLeaderBoardSelected] = useState(false);
  const [bossMenuSelected, setBossMenuSelected] = useState(false);
  const [messagesSelected, setMessagesSelected] = useState(false);

  return (
    <>
      {!leaderBoardSelected && !bossMenuSelected && !messagesSelected && (
        <main
          className={` flex min-h-screen flex-col items-center justify-center border-r-2 bg-[url("/bonfire.jpg")] bg-cover bg-center px-24`}
        >
          <div>
            <h1 className="font-kode-mono translate-y-[-1rem] text-5xl font-extrabold tracking-tight text-red-900 sm:text-[5rem]">
              <span>Type Souls</span>
            </h1>
          </div>

          <div
            className=" font-kode-mono  flex w-40 self-baseline border-[0.1rem] border-solid border-[white] p-4 text-center text-white"
            onClick={() => {
              setBossMenuSelected(true);
            }}
          >
            <button>Bosses</button>
          </div>

          <div
            className="font-kode-mono  w-40 self-end border-[0.1rem] border-solid border-[white] p-4 text-center text-white"
            onClick={() => {
              setLeaderBoardSelected(true);
            }}
          >
            <button>LeaderBoards</button>
          </div>

          <div
            className="font-kode-mono w-40 self-end border-[0.1rem] border-solid border-[white] p-4 text-center text-white"
            onClick={() => {
              setMessagesSelected(true);
            }}
          >
            <button>Messages</button>
          </div>

          <div className="font-kode-mono self-baseline bg-slate-800  p-2 text-white">
            <span>player info</span>
          </div>
        </main>
      )}

      {leaderBoardSelected && (
        <LeaderBoard setLeaderBoardSelected={setLeaderBoardSelected} />
      )}

      {bossMenuSelected && (
        <BossesMenu setBossMenuSelected={setBossMenuSelected} />
      )}
      {messagesSelected && (
        <Messages setMessagesSelected={setMessagesSelected} />
      )}
    </>
  );
};
