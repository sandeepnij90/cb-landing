import { Icon } from "./Icon";

interface BulletPointProps {
  title: string;
  description: string;
  IconColour: string;
  icon: React.ReactNode;
}

export const BulletPoint = ({
  title,
  description,
  IconColour,
  icon,
}: BulletPointProps) => {
  return (
    <li className="flex items-center space-x-4">
      <Icon icon={icon} IconColour={IconColour} />
      <div>
        <h3 className="font-bold text-slate-900">{title}</h3>
        <p className="text-slate-600 text-sm">{description}</p>
      </div>
    </li>
  );
};
