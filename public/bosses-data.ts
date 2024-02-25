import { type BossData } from "none/utils/types";

const gwynLordOfCinderText =
  "Gwyn the lord of cinder is the founder of the first flame, king of the age of fire and the final boss of Dark Souls";

const nashandraQueenOfDrangleicText =
  "Nashandra the Queen of Drangleic is the ruler of Drangleic, daughter of Manus, the Father of the Abyss and the final boss of Dark Souls two";

const soulOfCinderText =
  "The Lord of Cinder is the final boss of dark souls three an amalgamated manifestation of the of all the previous souls of the lords of cinder that linked themselves to the first flame to continue the age of fire and prevent bringing forth the age of dark";

export const bossData: BossData[] = [
  {
    id: 0,
    name: "Gwyn, Lord Of Cinder",
    levelUp: 10,
    reward: 10000,
    bossMenuImage: "/gwynLordOfCinderBossMenu.png",
    combatLocation: `bg-Lodran`,
    combatImage: "/gwynLordOfCinderCombat.jpg",
    victoryImage: `bg-GwynVictory`,
    defeatImage: `bg-GwynDefeat`,
    bossText: gwynLordOfCinderText,
    bossThemeMusic: "/GwynLordOfCinder.mp3",
  },
  {
    id: 1,
    name: "Nashandra Queen Of Drangleic",
    levelUp: 20,
    reward: 20000,
    bossMenuImage: "/nashandraQueenOfDrangleicBossMenu.png",
    combatLocation: `bg-Drangleic`,
    combatImage: "/nashandraQueenOfDrangleicCombat.png",
    victoryImage: `bg-NashandraVictory`,
    defeatImage: `bg-NashandraDefeat`,
    bossText: nashandraQueenOfDrangleicText,
    bossThemeMusic: "/queenOfDrangleic.mp3",
  },
  {
    id: 2,
    name: "Soul Of Cinder",
    levelUp: 30,
    reward: 30000,
    bossMenuImage: "/soulOfCinderBossMenuImage.jpg",
    combatLocation: `bg-Lothric`,
    combatImage: "/soulOfCinderCombatImage.png",
    victoryImage: `bg-SoulOfCinderVictory`,
    defeatImage: `bg-SoulOfCinderDefeat`,
    bossText: soulOfCinderText,
    bossThemeMusic: "/soulOfCinder.mp3",
  },
];

export const testData = [
  {
    id: 0,
    name: "Michael of Dibs",
    level: 60,
    souls: 60000,
  },
  {
    id: 0,
    name: "nanashi",
    level: 600,
    souls: 600000,
  },
];

export const messages = [
  {
    id: 0,
    message: "I love the fire keeper",
  },
  {
    id: 1,
    message: "I am married to the queen of Drangleic",
  },
];
