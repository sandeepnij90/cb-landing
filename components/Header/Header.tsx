import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pill } from "@/components/Pill/Pill";
import { Container } from "../Container/Container";
import { BookCallButton } from "../BookCallButton/BookCallButton";
import { DashboardMockup } from "../DashboardMockup/DashboardMockup";

export const Header = () => {
  return (
    <header className="bg-gradient-to-b from-purple-50 to-white-100 py-10">
      <Container>
        <div className="my-8">
          <Pill label="For early stage startups" />
        </div>

        <div className="md:grid grid-cols-2 gap-12">
          <div className="md:max-w-117.5">
            <h1 className="text-4xl font-bold">
              Validate Fast. <br />
              Build The Right <span className="text-indigo-500">MVP</span>.
              <br /> Raise With
              <br />
              Confidence
            </h1>
            <p className="text-slate-600 mt-8">
              Stop guessing. Our structured{" "}
              <span className="text-black font-semibold">
                12-Week MVP Discovery Sprint
              </span>{" "}
              helps you validate your idea, define your scope, and create a
              product roadmap investors love—before writing a single line of
              code.
            </p>

            <div className="mt-8">
              <BookCallButton />
            </div>
            <ul className="flex gap-4 mt-8">
              <li className="flex items-center text-sm">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="mr-1 text-green-800"
                />
                Reduced Risk
              </li>
              <li className="flex items-center text-sm">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="mr-1 text-green-800"
                />
                Clear Roadmap
              </li>
              <li className="flex items-center text-sm">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="mr-1 text-green-800"
                />
                Investor Ready
              </li>
            </ul>
          </div>

          <DashboardMockup />
        </div>
      </Container>
    </header>
  );
};
