import { useEffect, useState } from "react";
import { Player } from "tone";

// @ts-expect-error slaveKnight sound not registering with ts
import slaveKnight from "../../public/slaveKnight.mp3";

export const usePlayer = () => {
  const [player, setPlayer] = useState<Player | null>(null);

  useEffect(() => {
    const playerInstance = new Player(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      slaveKnight as never,

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
