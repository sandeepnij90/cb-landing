import { Stage } from "./Stage";

type StageItem = {
  week: string;
  title: string;
  tasks: string[];
};

type StagesProps = {
  stages: StageItem[];
};

export const Stages = ({ stages }: StagesProps) => {
  return (
    <div className="relative">
      <div className="lg:bg-slate-200 h-0.5 w-full absolute top-[50%]"></div>

      <div className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-4 md:gap-10 items-stretch">
        {stages.map((stage, index) => (
          <Stage
            key={`${stage.week}-${stage.title}`}
            week={stage.week}
            title={stage.title}
            tasks={stage.tasks}
            isLast={index === stages.length - 1}
          />
        ))}
      </div>
    </div>
  );
};
