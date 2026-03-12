import { Container } from "../Container/Container";

export const BuildTheRightProduct = () => {
  return (
    <section className="relative overflow-hidden bg-[#050314] py-24 sm:py-32">
      {/* Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(108,76,255,0.22),transparent_28%),radial-gradient(circle_at_68%_48%,rgba(15,98,178,0.18),transparent_24%),linear-gradient(180deg,rgba(17,13,44,0.98)_0%,rgba(5,3,20,1)_100%)]" />
      <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/8 blur-3xl" />
      {/* Gradient */}
      <Container>
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold  text-white sm:text-5xl md:text-7xl">
            Build the right product.
            <br />
            Not just a product.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-2xl">
            Stop guessing and start building with confidence. Your future users
            (and investors) are waiting.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
            <button
              type="button"
              className="rounded-full bg-[linear-gradient(90deg,#7c68ff_0%,#8a76ff_100%)] px-8 py-5 font-semibold text-white shadow-[0_16px_40px_rgba(124,104,255,0.35)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Book Your Strategy Call
            </button>
            <button
              type="button"
              className="rounded-full border border-slate-600/80 bg-white/0 px-8 py-5 font-medium text-slate-200 transition-colors duration-300 hover:border-slate-400 hover:text-white"
            >
              Ask a Question
            </button>
          </div>

          <p className="mt-12 text-sm text-slate-500 ">
            No pressure. No commitment. Just a conversation about your vision.
          </p>
        </div>
      </Container>
    </section>
  );
};
