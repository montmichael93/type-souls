import { useState } from "react";
import { useAuth } from "./Authprovider";
import { useGame } from "./GameProvider";

export const ReviewPage = () => {
  const { playerInfo } = useAuth();
  const { postNewReview, patchPlayerReview, setActiveComponent } = useGame();
  const [reviewNote, setReviewNote] = useState<string>("");
  return (
    <main
      className={` flex min-h-screen flex-col items-center justify-center gap-2 border-r-2 bg-[url("/bonfire.jpg")] bg-cover bg-center px-24`}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          playerInfo &&
            reviewNote &&
            postNewReview({
              playerName: playerInfo.name,
              level: playerInfo.level,
              content: reviewNote,
            })
              .then(() => {
                playerInfo && patchPlayerReview(playerInfo.id);
                setReviewNote("");
                setActiveComponent("main-menu");
              })
              .catch((error) => {
                console.log(error);
              });
        }}
      >
        <input
          type="text"
          name="review"
          value={reviewNote}
          onChange={(e) => {
            setReviewNote(e.target.value);
          }}
        />
        <input
          type="submit"
          className="border-[0.1rem] border-solid border-[black] bg-black p-2 text-white"
        />
      </form>
    </main>
  );
};
