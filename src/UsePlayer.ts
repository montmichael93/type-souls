import { useEffect, useState } from "react";
import { Player } from "tone";

// @ts-expect-error darksouls1theme sound not registering with ts
import darksouls1Theme from "../public/darksouls1theme.mp3";

export const usePlayer = () => {
  const [player, setPlayer] = useState<Player | null>(null);

  useEffect(() => {
    const playerInstance = new Player(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      darksouls1Theme as never,
      () => {
        setPlayer(playerInstance);
      },
    ).toDestination();
    return () => {
      // playerInstance.disconnect();
    };
  }, []);

  return player;
};
