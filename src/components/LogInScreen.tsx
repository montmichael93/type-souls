import { useState, type Dispatch, type SetStateAction } from "react";
import Image from "next/image";

export const LogInScreen = ({
  setUserSignedIn,
}: {
  setUserSignedIn: Dispatch<SetStateAction<boolean>>;
}) => {
  const [newPlayerSignUp, setNewPlayerSignUp] = useState(false);
  const [oldPlayerLogin, setOldPlayerLogIn] = useState(false);
  return (
    <>
      <main className="flex flex-col items-center">
        <div>
          <h1 className="text-[4rem]">Type Souls</h1>
        </div>

        <div className="">
          <Image src={"/fireKeeper.png"} height={300} width={300} alt="" />

          {!newPlayerSignUp && !oldPlayerLogin && (
            <div className="flex justify-between text-indigo-700">
              <div
                className="border-[0.1rem] border-solid border-[black] p-4"
                onClick={() => {
                  setOldPlayerLogIn(true);
                }}
              >
                <button>Log In</button>
              </div>
              <div
                className="border-[0.1rem] border-solid border-[black] p-4"
                onClick={() => {
                  setNewPlayerSignUp(true);
                }}
              >
                <button>Sign Up</button>
              </div>
            </div>
          )}

          {newPlayerSignUp && (
            <div
              className="text-center"
              //onClick={() => {
              //setUserSignedIn(true);
              //}}
            >
              <div>Name</div>
              <input type="text" className="border-[0.1rem] border-[black]" />
              <div>Email</div>
              <input type="text" className="border-[0.1rem] border-[black]" />
              <div>Password</div>
              <input type="text" className="border-[0.1rem] border-[black]" />
              <div
                className="text-indigo-700"
                onClick={() => {
                  setNewPlayerSignUp(false);
                }}
              >
                Go Back
              </div>
            </div>
          )}

          {oldPlayerLogin && (
            <div
              className="text-center"
              //onClick={() => {
              //setUserSignedIn(true);
              //}}
            >
              <div>Email</div>
              <input type="text" className="border-[0.1rem] border-[black]" />
              <div>Password</div>
              <input type="text" className="border-[0.1rem] border-[black]" />
              <div
                className="text-indigo-700"
                onClick={() => {
                  setOldPlayerLogIn(false);
                }}
              >
                Go Back
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};
