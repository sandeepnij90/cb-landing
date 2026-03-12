import clsx from "clsx";

interface PillProps {
  text: string;
  type: "primary" | "secondary";
}

export const Pill = ({ text, type }: PillProps) => {
  return (
    <div
      className={clsx(
        "px-4 py-1 rounded-full uppercase text-xs font-semibold",
        type === "primary"
          ? "bg-green-200/50 text-green-700"
          : "bg-slate-200/20 text-slate-700",
      )}
    >
      {text}
    </div>
  );
};
