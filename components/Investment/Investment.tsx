import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Container } from "../Container/Container";
import { InvestmentFeature } from "./InvestmentFeature";

const features = [
  "Dedicated Product Manager",
  "UX/UI Designer Access",
  "Technical Lead Consultation",
  "Weekly Strategy Workshops",
];

export const Investment = () => {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg shadow-slate-200/70">
          <div className="grid lg:grid-cols-[1.55fr_1fr]">
            <div className="bg-[linear-gradient(135deg,#17133f_0%,#1d1848_55%,#241f5f_100%)] px-8 py-10 sm:px-12 sm:py-14">
              <h2 className="text-3xl font-bold tracking-[-0.03em] text-white">
                Investment
              </h2>
              <p className="mt-4 max-w-xl leading-9 text-slate-300">
                A fixed-price engagement to de-risk your entire startup journey.
                Stop burning cash on unvalidated ideas.
              </p>

              <ul className="mt-6 space-y-6">
                {features.map((feature) => (
                  <InvestmentFeature key={feature} text={feature} />
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center px-8 py-10 text-center sm:px-12 sm:py-14">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Total Investment
              </p>
              <p className="mt-4 text-5xl font-bold tracking-[-0.04em] text-indigo-950 sm:text-6xl">
                $12,500
              </p>
              <p className="mt-3 text-2xl text-slate-400">
                Billed in 3 monthly installments
              </p>

              <button
                type="button"
                className="mt-10 rounded-2xl bg-violet-500 px-8 py-5 text-xl font-semibold text-white shadow-md shadow-violet-500/20 transition-colors hover:bg-violet-400"
              >
                Book Strategy Call
              </button>

              <p className="mt-6 flex items-center justify-center gap-2 text-base text-slate-500">
                <span className="text-slate-400">
                  <FontAwesomeIcon icon={faCircleInfo} />
                </span>
                <span>Limited to 4 startups per quarter</span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
