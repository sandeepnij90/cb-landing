interface DeliverableTileProps {
  title: string;
  accent: "red" | "purple" | "blue" | "green";
  icon: React.ReactNode;
}

const accentClasses: Record<DeliverableTileProps["accent"], string> = {
  red: "text-rose-400",
  purple: "text-violet-400",
  blue: "text-blue-400",
  green: "text-emerald-400",
};

export const DeliverableTile = ({
  title,
  accent,
  icon,
}: DeliverableTileProps) => {
  return (
    <div className="flex min-h-20 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
      <div className={`mb-4 text-3xl ${accentClasses[accent]}`}>{icon}</div>
      <p className="text-sm font-medium tracking-[-0.02em] text-slate-500">
        {title}
      </p>
    </div>
  );
};
