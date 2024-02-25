import { useState } from "react";
import { MainMenu } from "./MainMenu";
import { LogInScreen } from "./LogInScreen";
//import { usePlayer } from "none/utils/UsePlayer";

export const Game = () => {
  const [userSignedIn, setUserSignedIn] = useState(true);
  const [isBonFireLit, setIsBonFireLit] = useState(false);

  const setLargeText = !isBonFireLit ? "" : "Type Souls";

  return (
    <>
      {!userSignedIn && <LogInScreen setUserSignedIn={setUserSignedIn} />}

      {userSignedIn && !isBonFireLit && (
        <main
          className={` flex min-h-screen flex-col items-center justify-center border-r-2 bg-black bg-cover bg-center px-24`}
        >
          <div>
            <h1 className="font-kode-mono translate-y-[-1rem] text-5xl font-extrabold tracking-tight text-red-900 sm:text-[5rem]">
              <span>{setLargeText}</span>
            </h1>
          </div>

          <div
            hidden={isBonFireLit}
            className="border-[0.1rem] border-solid border-[white] p-4 text-white"
            onClick={() => {
              setIsBonFireLit(true);
              //playTheme();
            }}
          >
            <button hidden={isBonFireLit}>Click to light bonfire</button>
          </div>
        </main>
      )}

      {isBonFireLit && <MainMenu />}
    </>
  );
};
