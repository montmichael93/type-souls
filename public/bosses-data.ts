import { type BossData } from "none/utils/types";

const gwynLordOfCinderLore = `Gwyn, also known as Gwyn, Lord of Sunlight, Gwyn, Lord of Cinder and Lord Gwyn is the founder of the kingdom of Lodran and the final boss of dark souls.
  After the start of the first flame he slayed the everlasting dragons ushering in the age of fire. Although the Age of Fire and the rule of the gods lasted for centuries, 
  as the flame began to fade Gwyn understood that this would lead to the return of the humans, carriers of the Dark Soul, and that a Dark Lord would arise among them 
  capable of countering its power The god feared this outcome and his decision was drastic: sacrifice his immense soul power, link the dying Flame and prolong its life 
  in an unnatural way thus resisting the course of nature to maintain the world of gods. Eventually Gwyn linked the First Flame, prolonging its life
  but being consumed by it, remaining an empty husk of cinders guarding the core of the Kiln. The explosion of the newly kindled fire melted the surroundings 
  and burned his knights to ashes, leaving them to wander the world as disembodied spirits`;

const nashandraQueenOfDrangleicText = `Nashandra the Queen of Drangleic is the ruler of Drangleic, daughter of Manus, the Father of the Abyss and the final boss of Dark Souls two.
  Nashandra was the incarnation of her father's want, and thus began desiring what she did not have: power. Nashandra traveled to the land of Drangleic,
  and set her sights on its powerful ruler, King Vendrick. Deciding to seduce Vendrick, Nashandra assumed a human form of unparalleled beauty, 
  Vendrick then made Nashandra his queen. When Drangleic was ravaged by the second war with the giants and the spread of the Undead Curse, Vendrick came to 
  realize the true nature and identity of Nashandra, and what she had coveted all along. Knowing that his time was short and that his queen had to be stopped, Vendrick created several impasses that would prevent Nashandra from seizing the throne,
  and sealed himself away in the Undead Crypt. This left Nashandra the sole ruler of Drangleic, .Once the Bearer of the Curse has finally cleared the way to the Throne and acquired the means to access it, 
  Nashandra will intercept them and reveal her true form. She then declares the Bearer of the Curse worthy to assume her intended role for Vendrick, to have their power usurped by her so she can claim the throne for herself`;

const soulOfCinderText = `The Lord of Cinder is the final boss of dark souls three The Soul of Cinder is the deific manifestation of the souls of all those who have linked themselves to the First Flame through history, becoming Lords of Cinder, and thus is an entity possessing all the abilities of the previous Champions despite just being an empty husk.
It exists as the Flame's last defense inside its Kiln, protecting it from anyone attempting to link it again and acting as the ultimate test of their strength - a role that it has enacted for a very long time, confronting all who entered the Kiln as aspiring Lords
When tested by an aspiring Champion, the Soul of Cinder would even bring out the remnants of the will and power of the first one to ever link the First Flame: Lord Gwyn himself`;

export const bossData: BossData[] = [
  {
    id: 0,
    name: "Gwyn, Lord Of Cinder",
    levelUp: 10,
    reward: 10000,
    bossMenuImage: "/gwynLordOfCinderBossMenu.png",
    combatLocation: `url(/lodran.jpg)`,
    combatImage: "/gwynLordOfCinderCombat.jpg",
    victoryImage: `url(/gwynVictoryImage.jpg)`,
    defeatImage: `url(/gwynDefeatImage.jpg)`,
    bossText: 30,
    lore: gwynLordOfCinderLore,
    bossThemeMusic: "B1",
  },
  {
    id: 1,
    name: "Nashandra Queen Of Drangleic",
    levelUp: 20,
    reward: 20000,
    bossMenuImage: "/nashandraQueenOfDrangleicBossMenu.png",
    combatLocation: `url(/drangleicCastle.jpg)`,
    combatImage: "/nashandraQueenOfDrangleicCombat.png",
    victoryImage: `url(/nashandraVictoryImage.jpg)`,
    defeatImage: `url(/nashandraDefeatImage.jpg)`,
    bossText: 40,
    lore: nashandraQueenOfDrangleicText,
    bossThemeMusic: "B2",
  },
  {
    id: 2,
    name: "Soul Of Cinder",
    levelUp: 30,
    reward: 30000,
    bossMenuImage: "/soulOfCinderBossMenuImage.jpg",
    combatLocation: `url(/lothric.png)`,
    combatImage: "/soulOfCinderCombatImage.png",
    victoryImage: `url(/soulOfCinderVictoryImage.png)`,
    defeatImage: `url(/soulOfCinderDefeatImage.png)`,
    bossText: 50,
    lore: soulOfCinderText,
    bossThemeMusic: "B3",
  },
];
