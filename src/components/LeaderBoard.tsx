import { testData } from "public/bosses-data";
import Image from "next/image";
import { useGame } from "./Provider";

export const LeaderBoard = () => {
  const { setActiveComponent } = useGame();
  return (
    <>
      <main
        className={` flex min-h-screen flex-col items-center justify-center gap-2 border-r-2 bg-bonfire bg-cover bg-center px-24`}
      >
        <div
          className=" place-self-end border-[0.1rem] border-solid border-[white] p-4 font-kode-mono text-red-900"
          onClick={() => {
            setActiveComponent("main-menu");
          }}
        >
          <button>Return To Main Menu</button>
        </div>
        <div>
          <Image
            src={"/fireKeepersBlessings.jpg"}
            width={500}
            height={500}
            alt=""
          />
        </div>

        <div className="flex flex-col gap-5 text-[1.5rem] text-black">
          {testData.map((player) => {
            return (
              <div key={player.id} className="font-kode-mono ">
                <div className="bg-slate-800">{player.name}</div>
                <div className="bg-slate-800">Level: {player.level}</div>
                <div className="bg-slate-800">Souls: {player.souls}</div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};
