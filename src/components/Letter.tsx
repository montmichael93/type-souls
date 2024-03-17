//import { UseSampler } from "./UseSampler";

type StatusTypes = "correct" | "untouched" | "wrong" | "excess";

export const Letter = ({
  value,
  status,
}: {
  value: string;
  status: StatusTypes;
}) => {
  const className = (() => {
    if (status === "correct") {
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
  return <span className={` font-kode-mono ${className}`}>{value}</span>;
};
