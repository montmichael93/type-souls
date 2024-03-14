import { useGame } from "./GameProvider";
import Image from "next/image";

export const BossesMenu = () => {
  const { player } = useGame();
  const { bossData, activeComponent, setActiveComponent, setSelectedBoss } =
    useGame();

  return (
    <>
      {activeComponent === "boss-menu" && (
        <main
          className={` flex min-h-screen flex-col items-center justify-center border-r-2 bg-fogGate bg-cover bg-center px-24`}
        >
          <div
            className=" place-self-end border-[0.1rem] border-solid border-[red] bg-black p-4 font-kode-mono text-red-900"
            onClick={() => {
              setActiveComponent("main-menu");
            }}
          >
            <button>Return To bonfire</button>
          </div>

          {bossData.map((boss) => {
            return (
              <div
                key={boss.id}
                className="flex flex-col items-center gap-4 text-center text-red-900"
              >
                <div
                  onClick={() => {
                    setSelectedBoss(boss.id);
                    setActiveComponent("combat");
                    player?.stop();
                  }}
                >
                  <h2 className="text-[1.5rem]">{boss.name}</h2>
                  <Image
                    src={boss.bossMenuImage}
                    alt=""
                    width={300}
                    height={300}
                  />
                </div>
                <p className="bg-black">{boss.lore}</p>
              </div>
            );
          })}
        </main>
      )}
    </>
  );
};
