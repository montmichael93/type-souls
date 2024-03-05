import { useState } from "react";
import Image from "next/image";
import { useAuth } from "./Authprovider";
import { useGame } from "./GameProvider";

export const LogInSignUp = () => {
  const { postNewPlayer, logInAttempt } = useAuth();
  const {
    playerReviews,
    activeComponent,
    setActiveComponent,
    setPlayerReviews,
    retrievePlayerReviews,
  } = useGame();
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return (
    <>
      <main className="flex flex-col items-center">
        <div>
          <h1 className="font-kode-mono text-[4rem]">Type Souls</h1>
        </div>

        <div className="flex flex-col gap-1">
          <Image src={"/fireKeeper.png"} height={300} width={300} alt="" />

          {activeComponent === "landing-page" && (
            <>
              <div className="flex justify-between font-kode-mono text-indigo-700">
                <div
                  className="border-[0.1rem] border-solid border-[black] bg-black p-4"
                  onClick={() => {
                    setActiveComponent("log-in");
                  }}
                >
                  <button>Log In</button>
                </div>
                <div
                  className="border-[0.1rem] border-solid border-[black] bg-black p-4"
                  onClick={() => {
                    setActiveComponent("sign-up");
                  }}
                >
                  <button>Sign Up</button>
                </div>
              </div>

              <span
                className="flex self-center font-kode-mono text-indigo-700"
                onClick={() => {
                  retrievePlayerReviews()
                    .then((reviews) => {
                      setPlayerReviews(reviews);
                    })
                    .catch((error) => {
                      console.log(error);
                    });

                  setActiveComponent("review-page");
                }}
              >
                <button>Reviews</button>
              </span>
            </>
          )}

          {activeComponent === "sign-up" && (
            <form
              className="bg-black text-center font-kode-mono text-white"
              onSubmit={(e) => {
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
                e.preventDefault();
                logInAttempt({
                  email: emailInput,
                  password: passwordInput,
                })
                  .then(() => {
                    setEmailInput("");
                    setPasswordInput("");
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
                    setActiveComponent("landing-page");
                  }}
                >
                  Go Back
                </span>
              </div>
            </form>
          )}

          {activeComponent === "review-page" &&
            playerReviews.map((review) => (
              <>
                <div key={review.id} className="bg-slate-800 text-white">
                  <h2 className="font-kode-mono">{review.playerName}</h2>
                  <h2 className="font-kode-mono">Level: {review.level}</h2>
                  <p className="font=kode-mono"> {review.content}</p>
                </div>
              </>
            ))}
          <div
            hidden={activeComponent != "review-page"}
            className="text-center font-kode-mono text-indigo-700"
            onClick={() => {
              setActiveComponent("landing-page");
            }}
          >
            go back
          </div>
        </div>
      </main>
    </>
  );
};
