import { messages } from "public/bosses-data";
import Image from "next/image";
import { useGame } from "./Provider";

export const Messages = () => {
  const { setActiveComponent } = useGame();
  return (
    <main
      className={` flex min-h-screen flex-col items-center justify-center gap-2 border-r-2 bg-[url("/bonfire.jpg")] bg-cover bg-center px-24`}
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
          src={"/ashenOneAndFireKeeper.jpg"}
          width={400}
          height={400}
          alt=""
        />
      </div>

      <div className="flex flex-col gap-5 text-[1.5rem] text-black">
        {messages.map((player) => {
          return (
            <div
              key={player.id}
              className="flex justify-between gap-20 font-kode-mono"
            >
              <span className="bg-slate-800">{player.message}</span>
            </div>
          );
        })}
      </div>
    </main>
  );
};
