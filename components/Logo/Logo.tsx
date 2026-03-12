import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type LogoProps = {
  compact?: boolean;
};

export const Logo = ({ compact = false }: LogoProps) => {
  return (
    <div className="flex gap-2 items-center">
      <div
        className={`${
          compact ? "w-11 h-11 rounded-xl" : "w-16 h-16 rounded-2xl"
        } flex items-center justify-center bg-linear-to-br from-[#232046] to-[#7B5CF6]`}
      >
        <FontAwesomeIcon
          icon={faRocket}
          className={`${compact ? "text-xl" : "text-3xl"} text-white`}
        />
      </div>
      <h1
        className={`${
          compact ? "text-lg" : "text-2xl"
        } text-slate-800 font-bold`}
      >
        LaunchPad.<span className="text-indigo-400">sprint</span>
      </h1>
    </div>
  );
};
