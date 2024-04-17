import Section from "./Section";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { smallSphere, stars } from "../assets";
import { LeftLine, RightLine } from "./design/Pricing";
function Pricing() {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className=" hidden relative justify-center mb-[6.5rem] lg:flex ">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="sphere"
          />
          <div className=" absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full "
              width={950}
              height={400}
              alt="stars"
            />
          </div>
        </div>

        <Heading
          title="Pay once, use forever"
          tag="Get started with Brainwave"
        />
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className=" flex justify-center mt-10">
        <a className=" text-xs font-code font-bold border-b uppercase tracking-wider" href="/pricing">See the full details</a>
        </div>
      </div>
    </Section>
  );
}

export default Pricing;