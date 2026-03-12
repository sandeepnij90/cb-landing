import Image from "next/image";
import { DeliverableTile } from "./DeliverableTile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePdf,
  faPalette,
  faFileCode,
  faRoute,
} from "@fortawesome/free-solid-svg-icons";

const deliverables = [
  {
    title: "Spec Sheet.pdf",
    accent: "red" as const,
    icon: (
      <FontAwesomeIcon
        icon={faFilePdf}
        className="h-8 w-8"
        aria-hidden="true"
      />
    ),
  },
  {
    title: "Design System",
    accent: "purple" as const,
    icon: (
      <FontAwesomeIcon
        icon={faPalette}
        className="h-8 w-8"
        aria-hidden="true"
      />
    ),
  },
  {
    title: "API Docs",
    accent: "blue" as const,
    icon: (
      <FontAwesomeIcon
        icon={faFileCode}
        className="h-8 w-8"
        aria-hidden="true"
      />
    ),
  },
  {
    title: "Roadmap",
    accent: "green" as const,
    icon: (
      <FontAwesomeIcon icon={faRoute} className="h-8 w-8" aria-hidden="true" />
    ),
  },
];

export const DeliverablesPackage = () => {
  return (
    <div className="">
      <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
        <div className="overflow-hidden ">
          <Image
            src="/sprint-planning.png"
            alt="Sprint planning board with product planning documents pinned to a wall."
            width={1600}
            height={1200}
            className="h-auto w-full object-cover"
            priority={false}
          />
        </div>

        <div className="p-4 mt-6 flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-800">
            Deliverables Package
          </h3>
          <span className="inline-flex w-fit items-center rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-700">
            Ready for Dev
          </span>
        </div>

        <div className="p-4 mt-6 grid gap-4 sm:grid-cols-2">
          {deliverables.map((item) => (
            <DeliverableTile
              key={item.title}
              title={item.title}
              accent={item.accent}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
