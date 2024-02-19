import { usePlayer } from "none/UsePlayer";
import { UseSampler } from "none/UseSampler";
import { createTrackedWords } from "none/determineLetterState";
import { type ChangeEventHandler, useState, useRef } from "react";
import { GameStats } from "./GameStats";
import { Word } from "./Word";
import { type TrackedWord } from "none/types";

const gameText = `Hello my name is. olor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`;
//const gameText = "abc def ghi";

export const GameBoard = () => {
  const sampler = UseSampler();
  const player = usePlayer();
  const [wordIndex, setWordIndex] = useState(0);
  const [inputState, setInputState] = useState("");
  const [trackedWords, setTrackedWords] = useState<TrackedWord[]>(
    createTrackedWords(gameText),
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [activeGame, setActiveGame] = useState(false);

  const playTheme = () => {
    if (wordIndex === trackedWords.length) {
      player?.stop();
    } else {
      player?.start();
    }
  };

  //const katanaStrike = () => sampler && sampler.triggerAttack("A1");

  const inputHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    const lastKey = e.target.value.at(-1);
    if (lastKey === " ") {
      sampler?.triggerAttack("A1");
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
    <main className="flex min-h-screen flex-col items-center justify-center border-r-2 bg-[url('/bonfire.jpg')] bg-cover bg-center px-24 ">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className=" font-kode text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          <span className="text-[hsl(0,100%,100%)] opacity-50">Type Souls</span>
        </h1>
        <div className="grid grid-cols-1 gap-4  px-24 sm:grid-cols-2 md:gap-8"></div>

        <GameStats
          correctCount={correctCount}
          incorrectCount={incorrectCount}
          total={incorrectCount + correctCount}
        />
        <div
          id="game-container"
          className="flex h-44 w-full flex-wrap bg-slate-800 p-3 text-xl text-slate-200 opacity-50 "
          onClick={() => {
            setActiveGame(true);
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
        <input
          type="text"
          hidden={!activeGame}
          onClick={playTheme}
          value={inputState}
          onChange={inputHandler}
          ref={inputRef}
          className={`text-black`}
        />
      </div>
    </main>
  );
};
