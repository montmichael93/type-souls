import { messages } from "public/bosses-data";
import { type Dispatch, type SetStateAction } from "react";

export const Messages = ({
  setMessagesSelected,
}: {
  setMessagesSelected: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <main
      className={` flex min-h-screen flex-col items-center justify-center border-r-2 bg-[url("/bonfire.jpg")] bg-cover bg-center px-24`}
    >
      <div
        className=" font-kode-mono place-self-end border-[0.1rem] border-solid border-[white] p-4 text-red-900"
        onClick={() => {
          setMessagesSelected(false);
        }}
      >
        <button>Return To Main Menu</button>
      </div>
      <div>
        <h1 className="font-kode-mono translate-y-[-1rem] text-5xl font-extrabold tracking-tight text-red-900 sm:text-[5rem]">
          <span>Type Souls</span>
        </h1>
      </div>

      <div className="flex flex-col gap-5 text-[1.5rem] text-black">
        {messages.map((player) => {
          return (
            <div
              key={player.id}
              className="font-kode-mono flex justify-between gap-20"
            >
              <span className="bg-slate-800">{player.message}</span>
            </div>
          );
        })}
      </div>
    </main>
  );
};
