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
    combatImage: "/gwynLordOfCinderCombat.jpg",
    victoryImage: "/gwynVictoryImage.jpg",
    defeatImage: "/gwynDefeatImage.jpg",
    bossText: gwynLordOfCinderText,
    bossThemeMusic: "/GwynLordOfCinder.mp3",
  },
  {
    id: 1,
    name: "Nashandra Queen Of Drangleic",
    levelUp: 20,
    reward: 20000,
    bossMenuImage: "/nashandraQueenOfDrangleicBossMenu.png",
    combatImage: "/nashandraQueenOfDrangleicCombat.png",
    victoryImage: "/nashandraVictoryImage.jpg",
    defeatImage: "/nashandraDefeatImage.jpg",
    bossText: nashandraQueenOfDrangleicText,
    bossThemeMusic: "/queenOfDrangleic.mp3",
  },
  {
    id: 2,
    name: "Soul Of Cinder",
    levelUp: 30,
    reward: 30000,
    bossMenuImage: "/soulOfCinderBossMenuImage.jpg",
    combatImage: "/soulOfCinderCombatImage.png",
    victoryImage: "/soulOfCinderVictoryImage.png",
    defeatImage: "/soulOfCinderDefeatImage.jpg",
    bossText: soulOfCinderText,
    bossThemeMusic: "/soulOfCinder.mp3",
  },
];
