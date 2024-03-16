import Image from "next/image";
import { useGame } from "./GameProvider";
import { useAuth } from "./Authprovider";
import { Requests } from "none/utils/requests";
import { useEffect } from "react";

export const LeaderBoard = () => {
  const { activeComponent, setActiveComponent } = useGame();
  const { allPlayers, setAllPlayers } = useAuth();

  useEffect(() => {
    Requests.getAllPlayers()
      .then(setAllPlayers)
      .catch((error) => {
        console.log(error);
      });
  }, [setAllPlayers]);

  return (
    <>
      <main
        className={` flex min-h-screen flex-col items-center justify-center gap-2 border-r-2 bg-bonfireThree bg-cover bg-center px-24`}
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

        <div className="flex flex-col gap-5 text-[1.5rem] text-white">
          {activeComponent === "leaderBoard" &&
            allPlayers
              .sort((a, b) => b.souls - a.souls)
              .slice(0, 5)
              .map((player) => {
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
