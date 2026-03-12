import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Pill } from "./Pill";

interface CardProps {
  title: string;
  pillText: string;
  features: string[];
  type: "primary" | "secondary";
}

export const Card = ({ title, pillText, features, type }: CardProps) => {
  return (
    <div
      className={clsx(
        "p-4 bg-white rounded-xl shadow-md  border",
        type === "secondary" && "border-gray-400",
        type === "primary" && "border-indigo-500",
      )}
    >
      <div className="flex justify-between items-center mb-4">
        <h3
          className={clsx(
            "text-xl font-bold",
            type === "secondary" ? "text-slate-400" : "text-slate-900",
          )}
        >
          {title}
        </h3>
        <Pill text={pillText} type={type} />
      </div>
      <ul>
        {features.map((feature, index) => (
          <li key={index} className="mb-3">
            <span
              className={clsx(
                "mr-2",
                type === "primary" ? "text-green-500" : "text-red-500",
              )}
            >
              <FontAwesomeIcon icon={type === "primary" ? faCheck : faTimes} />
            </span>
            <span
              className={clsx(
                type === "primary" ? "text-slate-900" : "text-slate-400",
              )}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
