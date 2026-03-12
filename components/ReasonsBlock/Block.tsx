import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type BlockProps = {
  icon: IconDefinition;
  title: string;
  description: string;
};

export const Block = ({ icon, title, description }: BlockProps) => {
  return (
    <div className="space-y-4 bg-slate-200/20 p-4 rounded-2xl">
      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
        <FontAwesomeIcon icon={icon} className="text-red-500 text-lg" />
      </div>

      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>

      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};
