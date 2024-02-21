//import * as Tone from 'tone'

import { useEffect, useState } from "react";
import { Sampler } from "tone";
//
//import useSound from "use-sound";
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
