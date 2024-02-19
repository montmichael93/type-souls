//import { UseSampler } from "./UseSampler";

type StatusTypes = "correct" | "untouched" | "wrong" | "excess";

export const Letter = ({
  value,
  status,
}: {
  value: string;
  status: StatusTypes;
}) => {
  //const sampler = UseSampler();
  /*
  const swordStrike = () => {
    if (sampler) {
      sampler.triggerAttack("A1");
    }
  };*/

  //console.log(value);

  const className = (() => {
    if (status === "correct") {
      //swordStrike();
      return "text-green-400";
    }
    if (status === "excess") {
      return "text-red-600";
    }
    if (status === "untouched") {
      return "text-white";
    }
    if (status === "wrong") {
      return "text-red-500";
    }
  })();
  return <span className={` font-kode ${className}`}>{value}</span>;
};
