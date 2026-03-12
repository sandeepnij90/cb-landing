import { Container } from "../Container/Container";
import { Card } from "./Card";

export const Upsell = () => {
  return (
    <Container>
      <h2 className="text-center text-2xl font-bold text-slate-900">
        Why Not Just Hire Developers Immediately?
      </h2>
      <p className="text-center text-slate-600">
        Development is expensive. Strategy is leverage.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-10">
        <Card
          type="secondary"
          title="Traditional Approach"
          pillText="High Risk"
          features={[
            "Vague requirements lead to scope creep",
            "High cost of changes once code is written",
            "Building features users don't need",
            "Long feedback loops (months)",
            "Unpredictable timeline and budget",
          ]}
        />

        <Card
          type="primary"
          title="Discovery Sprint"
          pillText="High Clarity"
          features={[
            "Precise scope locks in fixed-price quotes",
            "Cheap to iterate on prototypes, not code",
            "Validated features ensure market fit",
            "Immediate feedback from real users",
            "Clear roadmap ready for investment",
          ]}
        />
      </div>
    </Container>
  );
};
