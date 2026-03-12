import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type StageProps = {
  week: string;
  title: string;
  tasks: string[];
  isLast?: boolean;
};

export const Stage = ({ week, title, tasks }: StageProps) => {
  return (
    <div className="relative">
      <article className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-8 shadow-sm h-full">
        <p className="text-sm font-bold uppercase tracking-wide text-indigo-500">
          {week}
        </p>
        <h4 className="mt-3 mb-3 text-xl font-bold text-slate-900 lg:min-h-15">
          {title}
        </h4>

        <ul className="space-y-3">
          {tasks.map((task) => (
            <li key={task} className="flex items-start gap-3 text-slate-600">
              <span className="text-emerald-500">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};
