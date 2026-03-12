type PillProps = {
  label: string;
};

export const Pill = ({ label }: PillProps) => {
  return (
    <div className="inline-flex items-center rounded-full bg-violet-500/20 text-indigo-500 text-bold bg-opacity-50  px-3 py-1 text-xs font-medium  uppercase">
      <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"> </span>
      {label}
    </div>
  );
};
