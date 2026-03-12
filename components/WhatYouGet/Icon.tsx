interface IconProps {
  icon: React.ReactNode;
  IconColour: string;
}

const backgroundMap: Record<string, string> = {
  red: "bg-red-300/20",
  blue: "bg-blue-300/20",
  green: "bg-green-300/20",
  yellow: "bg-yellow-300/20",
  purple: "bg-purple-300/20",
  pink: "bg-pink-300/20",
  indigo: "bg-indigo-300/20",
  orange: "bg-orange-300/20",
};

const textMap: Record<string, string> = {
  red: "text-red-500",
  blue: "text-blue-500",
  green: "text-green-500",
  yellow: "text-yellow-500",
  purple: "text-purple-500",
  pink: "text-pink-500",
  indigo: "text-indigo-500",
  orange: "text-orange-500",
};

export const Icon = ({ icon, IconColour }: IconProps) => {
  const bgColor = backgroundMap[IconColour] || "bg-gray-300/20";
  const textColor = textMap[IconColour] || "text-gray-500";

  return (
    <div
      className={`w-10 h-10 rounded-full grid items-center justify-center ${bgColor} ${textColor}`}
    >
      {icon}
    </div>
  );
};
