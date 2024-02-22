import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        Lodran: "url(/lodran.jpg)",
        Drangleic: "url(/drangleicCastle.jpg)",
        Lothric: "url(/lothric.png)",
      },
    },
  },
  plugins: [],
} satisfies Config;
