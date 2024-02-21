import { type BossData } from "none/utils/types";

import GwynBossMenuImage from "../public/gwynLordOfCinderBossMenu.png";
import Lodran from "../public/lodran.jpg";
import GwynCombatImage from "../public/gwynLordOfCinderCombat.jpg";
import GwynVictoryImage from "../public/gwynVictoryImage.jpg";
import GwynDefeatImage from "../public/gwynDefeatImage.jpg";
// @ts-expect-error GwynLordOFCinder sound not registering with ts
import GwynLordOfCinder from "../public/GwynLordOfCinder.mp3";
const gwynLordOfCinderText =
  "Gwyn the lord of cinder is the founder of the first flame, king of the age of fire and the final boss of Dark Souls";
//////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
import NashandraBossMenuImage from "../public/nashandraQueenOfDrangleicBossMenu.jpg";
import DrangleicCastle from "../public/drangleicCastle.jpg";
import NashandraCombatImage from "../public/nashandraQueenOfDrangleicCombat.png";
import NashandraVictoryImage from "../public/nashandraVictoryImage.jpg";
import NashandraDefeatImage from "../public/nashandraDefeatImage.jpg";
// @ts-expect-error queenOfDrangleic sound not registering with ts
import NashandraQueenOfDrangleic from "../public/queenOfDrangleic.mp3";

const nashandraQueenOfDrangleicText =
  "Nashandra the Queen of Drangleic is the ruler of Drangleic, daughter of Manus, the Father of the Abyss and the final boss of Dark Souls two";
/////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

import Lothric from "../public/lothric.png";
import SoulOfCinderBossMenuImage from "../public/soulOfCinderBossMenuImage.jpg";
import SoulOfCinderCombatImage from "../public/soulOfCinderCombatImage.jpg";
import SoulOfCinderVictoryImage from "../public/soulOfCinderVictoryImage.png";
import SoulOfCinderDefeatImage from "../public/soulOfCinderDefeatImage.png";
// @ts-expect-error soulOfCinder sound not registering with ts
import SoulOfCinder from "../public/soulOfCinder.mp3";

const soulOfCinderText =
  "The Lord of Cinder is the final boss of dark souls three an amalgamated manifestation of the of all the previous souls of the lords of cinder that linked themselves to the first flame to continue the age of fire and prevent bringing forth the age of dark";

export const data: BossData[] = [
  {
    name: "Gwyn, Lord Of Cinder",
    levelUp: 10,
    reward: 10000,
    combatLocation: Lodran.src,
    bossMenuImage: GwynBossMenuImage.src,
    combatImage: GwynCombatImage.src,
    victoryImage: GwynVictoryImage.src,
    defeatImage: GwynDefeatImage.src,
    bossText: gwynLordOfCinderText,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    bossThemeMusic: GwynLordOfCinder,
  },
  {
    name: "Nashandra Queen Of Drangleic",
    levelUp: 20,
    reward: 20000,
    combatLocation: DrangleicCastle.src,
    bossMenuImage: NashandraBossMenuImage.src,
    combatImage: NashandraCombatImage.src,
    victoryImage: NashandraVictoryImage.src,
    defeatImage: NashandraDefeatImage.src,
    bossText: nashandraQueenOfDrangleicText,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    bossThemeMusic: NashandraQueenOfDrangleic,
  },
  {
    name: "Soul Of Cinder",
    levelUp: 30,
    reward: 30000,
    combatLocation: Lothric.src,
    bossMenuImage: SoulOfCinderBossMenuImage.src,
    combatImage: SoulOfCinderCombatImage.src,
    victoryImage: SoulOfCinderVictoryImage.src,
    defeatImage: SoulOfCinderDefeatImage.src,
    bossText: soulOfCinderText,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    bossThemeMusic: SoulOfCinder,
  },
];
