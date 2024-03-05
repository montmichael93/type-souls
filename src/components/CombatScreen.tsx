import { usePlayer } from "none/utils/UsePlayer";
import { UseSampler } from "none/utils/UseSampler";
import { createTrackedWords } from "none/utils/determineLetterState";
import {
  type ChangeEventHandler,
  useState,
  useRef,
  type Dispatch,
  type SetStateAction,
} from "react";
import { GameStats } from "./GameStats";
import { Word } from "./Word";
import { type TrackedWord } from "none/utils/types";
import { type Frequency } from "tone/build/esm/core/type/Units";
import Image from "next/image";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import { useGame } from "./GameProvider";

const gameText = `123`;
//const gameText = "abc def ghi";

export const CombatScreen = ({
  correctCount,
  incorrectCount,
  didPlayerDie,
  didPlayerSurvive,
  setDidPlayerDie,
  setDidPlayerSurvive,
  setIncorrectCount,
  setCorrectCount,
}: {
  correctCount: number;
  incorrectCount: number;
  didPlayerDie: boolean;
  didPlayerSurvive: boolean;
  setDidPlayerDie: Dispatch<SetStateAction<boolean>>;
  setDidPlayerSurvive: Dispatch<SetStateAction<boolean>>;
  setIncorrectCount: Dispatch<SetStateAction<number>>;
  setCorrectCount: Dispatch<SetStateAction<number>>;
}) => {
  const { bossData, activeComponent, selectedBoss, setActiveComponent } =
    useGame();
  const sampler = UseSampler();
  const player = usePlayer();
  const [wordIndex, setWordIndex] = useState(0);
  const [inputState, setInputState] = useState("");
  const [trackedWords, setTrackedWords] = useState<TrackedWord[]>(
    createTrackedWords(gameText),
  );
  const inputRef = useRef<HTMLInputElement>(null);
  //const [incorrectCount, setIncorrectCount] = useState(0);
  //const [correctCount, setCorrectCount] = useState(0);
  //const [didPlayerDie, setDidPlayerDie] = useState(false);
  //const [didPlayerSurvive, setDidPlayerSurvive] = useState(false);

  const average = Math.round(
    (correctCount / (incorrectCount + correctCount)) * 100,
  );

  const playTheme = () => {
    if (wordIndex === trackedWords.length) {
      player?.stop();
    } else {
      player?.start();
    }
  };

  if (wordIndex === trackedWords.length && !didPlayerSurvive && !didPlayerDie) {
    if (average === 100) {
      setDidPlayerSurvive(true);
      setActiveComponent("combat-outcome");
    } else {
      setDidPlayerDie(true);
      setActiveComponent("combat-outcome");
    }
  }

  //const endOfCombat = didPlayerDie || didPlayerSurvive;

  const inputHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    const lastKey = e.target.value.at(-1);
    const attackAndDamageSounds = ["A1", "A2", "A3", "A4", "A5"];
    const selectSoundAtRandom = attackAndDamageSounds[
      Math.floor(Math.random() * 3)
    ] as Frequency;

    if (lastKey === " ") {
      sampler?.triggerAttack(selectSoundAtRandom);

      const trackedWord = trackedWords[wordIndex];
      if (trackedWord?.correct !== trackedWord?.current) {
        setIncorrectCount(incorrectCount + 1);
      } else {
        setCorrectCount(correctCount + 1);
      }

      setWordIndex(wordIndex + 1);
      setInputState("");
      return;
    }
    setInputState(e.target.value);
    setTrackedWords(
      trackedWords.map((trackedWord, trackedWordIndex) => {
        if (trackedWordIndex !== wordIndex) {
          return trackedWord;
        }
        return { ...trackedWord, current: e.target.value };
      }),
    );
  };

  return (
    <>
      {activeComponent === "combat" && (
        <>
          <main
            className={` flex min-h-screen flex-col items-center justify-center border-r-2 bg-cover bg-center px-24 ${bossData[selectedBoss!]?.combatLocation}`}
          >
            <div>
              <h1 className="translate-y-[-1rem] font-kode-mono text-5xl font-extrabold tracking-tight text-red-900 sm:text-[5rem]">
                <span>{bossData[selectedBoss!]?.name}</span>
              </h1>
            </div>
            <div>
              <div>
                <Image
                  src={
                    bossData[selectedBoss!]
                      ?.combatImage as unknown as StaticImport
                  }
                  alt=""
                  width={400}
                  height={400}
                />
              </div>

              <div>
                <GameStats
                  correctCount={correctCount}
                  incorrectCount={incorrectCount}
                />
              </div>

              <div
                id="game-container"
                className="flex h-44 w-full flex-wrap bg-slate-800 p-3 text-xl text-slate-200 opacity-50 "
                onClick={() => {
                  //setEngagedInCombat(true);
                  //inputRef.current?.focus();
                }}
              >
                {gameText.split(" ").map((_word, index) => (
                  <Word
                    key={index}
                    index={index}
                    activeIndex={wordIndex}
                    trackedWords={trackedWords}
                  />
                ))}
              </div>
              <div className="bg-black text-center text-red-900">
                Travel to Bonfire is not available during combat
              </div>
            </div>
            <div>
              <input
                type="text"
                //hidden={!engagedInCombat}
                onClick={playTheme}
                value={inputState}
                onChange={inputHandler}
                ref={inputRef}
              />
            </div>
          </main>
        </>
      )}
    </>
  );
};
