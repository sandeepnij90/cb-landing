import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faUsers,
  faMobile,
  faServer,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "../Container/Container";
import { BulletPoint } from "./BulletPoint";
import { DeliverablesPackage } from "./deliverablesPackage/DeliverablesPackage";

export const WhatYouGet = () => {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,520px)] lg:items-center">
          <div className="lg:max-w-xl">
            <h2 className="text-2xl font-bold text-slate-900 text-center lg:text-left">
              What You Walk Away With
            </h2>
            <p className="text-slate-600 my-6 text-center lg:text-left">
              No vague advice. You get tangible, execution-ready assets that you
              can hand to a development team or present to an investor
              immediately.
            </p>
            <ul className="flex flex-col gap-8">
              <BulletPoint
                icon={<FontAwesomeIcon icon={faList} />}
                IconColour="blue"
                title="Clear MVP Feature List"
                description="A prioritized backlog of exactly what to build for V1, and what to save for later."
              />
              <BulletPoint
                icon={<FontAwesomeIcon icon={faUsers} />}
                IconColour="purple"
                title="Validated User Personas"
                description="Deep understanding of who your customer is and the exact problem you solve for them."
              />
              <BulletPoint
                icon={<FontAwesomeIcon icon={faMobile} />}
                IconColour="pink"
                title="Clickable Prototype"
                description="High-fidelity UI designs and interactive prototypes to visualize the product."
              />
              <BulletPoint
                icon={<FontAwesomeIcon icon={faServer} />}
                IconColour="green"
                title="Technical Architecture"
                description="Recommended tech stack, database schema, and API structure for scalability."
              />
              <BulletPoint
                icon={<FontAwesomeIcon icon={faFileAlt} />}
                IconColour="orange"
                title="Fundraising Narrative"
                description="Data-backed product story to use in your pitch deck and investor meetings."
              />
            </ul>
          </div>
          <DeliverablesPackage />
        </div>
      </Container>
    </section>
  );
};
