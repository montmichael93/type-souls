import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        "kode-mono": ['"Kode Mono"', "monospace"],
      },
      backgroundImage: {
        fireKeeperGreeting: "url(/fireKeeperGreeting.gif)",
        bonfire: "url(/bonfire.jpg)",
        bonfireTwo: "url(/bonfireTwo.jpg)",
        bonfireThree: "url(/bonfireThree.gif)",
        Lodran: "url(/lodran.jpg)",
        Drangleic: "url(/drangleicCastle.jpg)",
        Lothric: "url(/lothric.png)",
        GwynVictory: "url(/gwynVictoryImage.jpg)",
        NashandraVictory: "url(/nashandraVictoryImage.jpg)",
        SoulOfCinderVictory: "url(/soulOfCinderVictoryImage.png)",
        GwynDefeat: "url(/gwynDefeatImage.jpg)",
        NashandraDefeat: "url(/nashandraDefeatImage.jpg)",
        SoulOfCinderDefeat: "url(/soulOfCinderDefeatImage.png)",
        fogGate: "url(/theFogGate.gif)",
      },
    },
  },
  plugins: [],
} satisfies Config;
