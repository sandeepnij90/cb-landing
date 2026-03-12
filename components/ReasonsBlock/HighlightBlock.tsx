import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HighlightBlock = () => {
  return (
    <div className="space-y-4 bg-slate-200/20 p-4 rounded-2xl text-center bg-slate-900/90 text-white flex flex-col justify-center">
      <h3 className="text-2xl font-bold">There is a better way.</h3>
      <p className="text-gray-300">
        Validate before you build. Save time, money, and sanity
      </p>
      <p className="text-white flex items-center justify-center gap-1 font-semibold">
        Discover the solution{" "}
        <span className="text-xs animate-bounce">
          <FontAwesomeIcon icon={faArrowDown} />
        </span>
      </p>
    </div>
  );
};
