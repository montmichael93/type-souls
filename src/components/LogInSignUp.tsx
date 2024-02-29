import { useState, type Dispatch, type SetStateAction } from "react";
import Image from "next/image";
import { useAuth } from "./Authprovider";
import { useGame } from "./Provider";

export const LogInSignUp = ({
  setUserSignedIn,
}: {
  setUserSignedIn: Dispatch<SetStateAction<boolean>>;
}) => {
  const { postNewPlayer, logInAttempt } = useAuth();
  const { activeComponent, setActiveComponent } = useGame();
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return (
    <>
      <main className="flex flex-col items-center">
        <div>
          <h1 className="text-[4rem]">Type Souls</h1>
        </div>

        <div className="flex flex-col gap-1">
          <Image src={"/fireKeeper.png"} height={300} width={300} alt="" />

          {activeComponent === "landing-page" && (
            <div className="flex justify-between font-kode-mono text-indigo-700">
              <div
                className="border-[0.1rem] border-solid border-[black] bg-black p-4"
                onClick={() => {
                  //setOldPlayerLogIn(true);
                  setActiveComponent("log-in");
                }}
              >
                <button>Log In</button>
              </div>
              <div
                className="border-[0.1rem] border-solid border-[black] bg-black p-4"
                onClick={() => {
                  //setNewPlayerSignUp(true);
                  setActiveComponent("sign-up");
                }}
              >
                <button>Sign Up</button>
              </div>
            </div>
          )}

          {activeComponent === "sign-up" && (
            <form
              className="bg-black text-center font-kode-mono text-white"
              onSubmit={(e) => {
                //setUserSignedIn(true);
                e.preventDefault();
                postNewPlayer({
                  name: nameInput,
                  level: 0,
                  souls: 0,
                  email: emailInput,
                  password: passwordInput,
                  leftReview: false,
                })
                  .then(() => {
                    setNameInput("");
                    setEmailInput("");
                    setPasswordInput("");
                    setActiveComponent("log-in");
                  })
                  .catch((e) => {
                    console.log(e);
                  });
              }}
            >
              <div>Name</div>
              <input
                name="name"
                type="text"
                value={nameInput}
                className="border-[0.1rem] border-[red] text-black"
                onChange={(e) => {
                  setNameInput(e.target.value);
                }}
                required
              />
              <div>Email</div>
              <input
                name="Email"
                type="text"
                value={emailInput}
                className="border-[0.1rem] border-[red] text-black"
                onChange={(e) => {
                  setEmailInput(e.target.value);
                }}
                required
              />
              <div>Password</div>
              <input
                name="password"
                type="password"
                value={passwordInput}
                className="border-[0.1rem] border-[red] text-black"
                onChange={(e) => {
                  setPasswordInput(e.target.value);
                }}
                required
              />
              <div className="flex justify-center gap-2">
                <input
                  type="submit"
                  value="submit"
                  className="text-indigo-700"
                />
                <span
                  onClick={() => {
                    //setNewPlayerSignUp(false);
                    setActiveComponent("landing-page");
                  }}
                >
                  Go Back
                </span>
              </div>
            </form>
          )}

          {activeComponent === "log-in" && (
            <form
              className="bg-black text-center font-kode-mono text-white"
              onSubmit={(e) => {
                //setUserSignedIn(true);
                e.preventDefault();
                logInAttempt({
                  email: emailInput,
                  password: passwordInput,
                })
                  .then(() => {
                    setEmailInput("");
                    setPasswordInput("");
                    setUserSignedIn(true);
                    setActiveComponent("abyss");
                  })
                  .catch((e) => {
                    console.log(e);
                  });
              }}
            >
              <div>Email</div>
              <input
                name="Email"
                type="text"
                value={emailInput}
                className="border-[0.1rem] border-[red] text-black"
                onChange={(e) => {
                  setEmailInput(e.target.value);
                }}
                required
              />
              <div>Password</div>
              <input
                name="password"
                type="password"
                value={passwordInput}
                className="border-[0.1rem] border-[red] text-black"
                onChange={(e) => {
                  setPasswordInput(e.target.value);
                }}
                required
              />

              <div className="flex flex-col justify-center">
                <input
                  type="submit"
                  value="submit"
                  className="text-indigo-700"
                />
                <span
                  onClick={() => {
                    //setOldPlayerLogIn(false);
                    setActiveComponent("landing-page");
                  }}
                >
                  Go Back
                </span>
              </div>
            </form>
          )}
        </div>
      </main>
    </>
  );
};
