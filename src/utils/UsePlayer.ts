import { useEffect, useState } from "react";
import { Player } from "tone";

// @ts-expect-error darkSoulsOneTheme sound not registering with ts
import darkSoulsOneTheme from "../../public/darkSoulsOnetheme.mp3";
// @ts-expect-error darkSoulsTwoTheme sound not registering with ts
import darkSoulsTwoTheme from "../../public/darkSoulsTwotheme.mp3";
// @ts-expect-error darkSoulsThreeTheme sound not registering with ts
import darkSoulsThreeTheme from "../../public/darkSoulsThreetheme.mp3";
// @ts-expect-error slaveKnight sound not registering with ts
import slaveKnight from "../../public/slaveKnight.mp3";

const totalThemes = [
  darkSoulsOneTheme,
  darkSoulsTwoTheme,
  darkSoulsThreeTheme,
  slaveKnight,
];

const selectThemeAtRandom = totalThemes[
  Math.floor(Math.random() * 3)
] as number;

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
