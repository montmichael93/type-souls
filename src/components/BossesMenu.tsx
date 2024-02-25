import { type Dispatch, type SetStateAction, useState } from "react";
import { useGame } from "./Provider";
import Image from "next/image";
import { CombatScreen } from "./CombatScreen";

export const BossesMenu = ({
  setBossMenuSelected,
}: {
  setBossMenuSelected: Dispatch<SetStateAction<boolean>>;
}) => {
  const { bossData } = useGame();
  const [selectedBoss, setSelectedBoss] = useState<number | null>(null);
  const [engagedInCombat, setEngagedInCombat] = useState(false);

  return (
    <>
      {!engagedInCombat && (
        <>
          <main
            className={` flex min-h-screen flex-col items-center justify-center border-r-2 bg-[url("/bonfire.jpg")] bg-cover bg-center px-24`}
          >
            <div
              className=" font-kode-mono place-self-end border-[0.1rem] border-solid border-[white] p-4 text-red-900"
              onClick={() => {
                setBossMenuSelected(false);
              }}
            >
              <button>Return To Main Menu</button>
            </div>
            <div>
              <h1 className="font-kode-mono translate-y-[-1rem] text-5xl font-extrabold tracking-tight text-red-900 sm:text-[5rem]">
                <span>Type Souls</span>
              </h1>
            </div>

            <div className="flex gap-x-40 text-center text-white">
              {bossData.map((boss) => {
                return (
                  <div
                    key={boss.id}
                    onClick={() => {
                      setSelectedBoss(boss.id);
                      setEngagedInCombat(true);
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

      {engagedInCombat && (
        <CombatScreen
          selectedBoss={selectedBoss}
          engagedInCombat={engagedInCombat}
          setSelectedBoss={setSelectedBoss}
          setEngagedInCombat={setEngagedInCombat}
          setBossMenuSelected={setBossMenuSelected}
        />
      )}
    </>
  );
};
