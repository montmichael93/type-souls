import { useGame } from "./GameProvider";
import Image from "next/image";

export const BossesMenu = () => {
  const { bossData, activeComponent, setActiveComponent, setSelectedBoss } =
    useGame();

  return (
    <>
      {activeComponent === "boss-menu" && (
        <>
          <main
            className={` flex min-h-screen flex-col items-center justify-center border-r-2 bg-bonfire bg-cover bg-center px-24`}
          >
            <div
              className=" place-self-end border-[0.1rem] border-solid border-[white] p-4 font-kode-mono text-red-900"
              onClick={() => {
                setActiveComponent("main-menu");
              }}
            >
              <button>Return To Main Menu</button>
            </div>

            <div className="flex flex-col gap-4 text-center text-red-900">
              {bossData.map((boss) => {
                return (
                  <div
                    key={boss.id}
                    onClick={() => {
                      setSelectedBoss(boss.id);
                      setActiveComponent("combat");
                    }}
                  >
                    <h2 className="text-[1.5rem] ">{boss.name}</h2>
                    <Image
                      src={boss.bossMenuImage}
                      alt=""
                      width={300}
                      height={300}
                    />
                  </div>
                );
              })}
            </div>
          </main>
        </>
      )}
    </>
  );
};
