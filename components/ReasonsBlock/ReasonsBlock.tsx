import {
  faFileAlt,
  faLayerGroup,
  faExclamationTriangle,
  faCompass,
  faSearchDollar,
} from "@fortawesome/free-solid-svg-icons";
import { Block } from "./Block";
import { Container } from "../Container/Container";
import { HighlightBlock } from "./HighlightBlock";

export const ReasonsBlock = () => {
  return (
    <Container>
      <div>
        <h2 className="text-center text-2xl font-bold">
          Why Most Startups Fail Before Launch
        </h2>
        <p className="text-center text-slate-600 max-w-175 mx-auto mt-4">
          Building a product without a roadmap is like building a house without
          a blueprint. It&apos;s expensive, risky, and usually ends in disaster.
        </p>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Block
            title="I don't know where to start"
            description="You have a brilliant idea but the path to execution is foggy. Without a clear plan, you're paralyzed by analysis paralysis."
            icon={faCompass}
          />

          <Block
            title="Wildly Different Quotes"
            description="Agencies quote you anywhere from $10k to $150k because your scope is vague. You risk overpaying or getting a subpar product."
            icon={faFileAlt}
          />

          <Block
            title="Feature Bloat"
            description="'I don't know what to include in V1.' Trying to build everything at once drains your budget and delays your launch."
            icon={faLayerGroup}
          />

          <Block
            title="Building the Wrong Thing"
            description="'I don't know what to include in V1.' Trying to build everything at once drains your budget and delays your launch."
            icon={faExclamationTriangle}
          />
          <Block
            title="Investor Skepticism"
            description="'Investors want clarity I don't have yet.' You need more than just a pitch deck; you need a validated product strategy."
            icon={faSearchDollar}
          />
          <HighlightBlock />
        </div>
      </div>
    </Container>
  );
};
