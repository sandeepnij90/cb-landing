import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface InvestmentFeatureProps {
  text: string;
}

export const InvestmentFeature = ({ text }: InvestmentFeatureProps) => {
  return (
    <li className="flex items-center gap-4">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-emerald-400">
        <FontAwesomeIcon icon={faCheck} />
      </span>
      <span className=" text-white/95">{text}</span>
    </li>
  );
};
