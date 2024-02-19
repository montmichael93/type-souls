//import * as Tone from 'tone'

import { useEffect, useState } from "react";
import { Sampler } from "tone";
//
//import useSound from "use-sound";
// @ts-expect-error katana sound not registering with ts
import katanaSound from "../public/KatanaSound.mp3";
// @ts-expect-error darksouls1theme sound not registering with ts
import darksouls1Theme from "../public/darksouls1theme.mp3";

export const UseSampler = () => {
  const [sampler, setSampler] = useState<Sampler | null>(null);

  useEffect(() => {
    const samplerInstance = new Sampler(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      { A1: katanaSound, D1: darksouls1Theme },
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
