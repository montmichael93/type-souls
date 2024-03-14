//import * as Tone from 'tone'

import { useEffect, useState } from "react";
import { Sampler } from "tone";

// @ts-expect-error katana sound not registering with ts
import katanaSound from "../../public/KatanaSound.mp3";
// @ts-expect-error sword slash sound not registering with ts
import swordSwingSound from "../../public/swordSlash.mp3";
// @ts-expect-error stab slash sound not registering with ts
import stab from "../../public/stab.mp3";
// @ts-expect-error stab slash sound not registering with ts
import zweihander from "../../public/zweihander.mp3";
// @ts-expect-error sword stab sound not registering with ts
import swordStab from "../../public/SwordStab.mp3";
// @ts-expect-error Gwyn's theme is not registering with ts
import GwynTheme from "../../public/GwynLordOfCinder.mp3";
// @ts-expect-error Nashandra's theme is not registering with ts
import NashandraTheme from "../../public/QueenOfDrangleic.mp3";
// @ts-expect-error soul of cinder theme is not registering with ts
import SoulsOfCinderTheme from "../../public/soulOfCinder.mp3";
// @ts-expect-error youDied is not registering with ts
import youDied from "../../public/youDied.mp3";

export const UseSampler = () => {
  const [sampler, setSampler] = useState<Sampler | null>(null);

  useEffect(() => {
    const samplerInstance = new Sampler(
      {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        A1: katanaSound,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        A2: stab,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        A3: swordSwingSound,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        A4: zweihander,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        A5: swordStab,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        B1: GwynTheme,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        B2: NashandraTheme,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        B3: SoulsOfCinderTheme,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      },
      {
        onload: () => {
          setSampler(samplerInstance);
        },
      },
    ).toDestination();

    return () => {
      samplerInstance.disconnect();
    };
  }, []);

  return sampler;
};
