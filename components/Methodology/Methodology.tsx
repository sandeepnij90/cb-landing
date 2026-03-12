import { Container } from "../Container/Container";
import { Stages } from "../Stages/Stages";

export const Methodology = () => {
  const stages = [
    {
      week: "Week 1-2",
      title: "Vision & Validation",
      tasks: [
        "Unpack founder vision",
        "Lean Canvas creation",
        "Competitor analysis",
      ],
    },
    {
      week: "Week 3-6",
      title: "User Research & Clarity",
      tasks: ["User interviews", "Pain point mapping", "User journey flows"],
    },
    {
      week: "Week 7-9",
      title: "MVP Definition",
      tasks: [
        "Feature prioritization (MoSCoW)",
        "Wireframing core screens",
        "Scope lockdown",
      ],
    },
    {
      week: "Week 10-12",
      title: "Roadmap & Strategy",
      tasks: [
        "Tech stack selection",
        "Development roadmap",
        "Investment deck assets",
      ],
    },
  ];

  return (
    <section className="bg-slate-200/20 py-16">
      <Container>
        <h2 className="text-center font-bold text-xs uppercase text-indigo-500 mb-4">
          The Methodology
        </h2>
        <h3 className="text-center text-3xl font-bold text-black mb-4">
          12-Week MVP Discovery Sprint
        </h3>
        <p className="text-center max-w-175 mx-auto text-slate-600 mt-4">
          A structured, intense, and collaborative process to turn your raw idea
          into a development-ready product strategy.
        </p>

        <Stages stages={stages} />
      </Container>
    </section>
  );
};
