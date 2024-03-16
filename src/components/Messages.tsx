/* eslint-disable @typescript-eslint/no-unsafe-call */
import Image from "next/image";
import { useGame } from "./GameProvider";
import { type playerMessages } from "none/utils/types";
import { useState } from "react";

export const Messages = () => {
  const { playerMessages, setActiveComponent, postNewMessage } = useGame();
  const [messageInput, setMessageInput] = useState("");

  return (
    <main
      className={` flex min-h-screen flex-col items-center justify-center gap-2 border-r-2 bg-bonfireThree bg-cover bg-center px-24`}
    >
      <div
        className=" place-self-end border-[0.1rem] border-solid border-[white] p-4 font-kode-mono text-red-900"
        onClick={() => {
          //setMessagesSelected(false);
          setActiveComponent("main-menu");
        }}
      >
        <button>Return To Main Menu</button>
      </div>
      <div>
        <Image
          src={"/fireKeeperMainMenu.jpg"}
          width={500}
          height={500}
          alt=""
        />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          postNewMessage({
            contents: messageInput,
          })
            .then(() => {
              setMessageInput("");
            })
            .catch((e) => {
              console.log(e);
            });
        }}
      >
        <div className="flex flex-col gap-1">
          <input
            type="text"
            value={messageInput}
            placeholder="Enter Message Here"
            className="bg-slate-800 text-center text-white"
            onChange={(e) => {
              setMessageInput(e.target.value);
            }}
            required
          />

          <input
            type="submit"
            value="Send Message"
            className="bg-slate-800 text-white"
          />
        </div>
      </form>

      <div className="flex flex-col gap-5 text-[1.5rem] text-black">
        {playerMessages.slice(-5).map((player: playerMessages) => {
          return (
            <div
              key={player.id}
              className="flex justify-between gap-20 font-kode-mono"
            >
              <span className="bg-slate-800 text-white">{player.contents}</span>
            </div>
          );
        })}
      </div>
    </main>
  );
};
