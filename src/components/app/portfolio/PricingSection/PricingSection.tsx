import { SectionSeparator } from "@/components/SectionSeparator";
import { PricingList } from "./PricingList";

export function PricingSection(){
    return (
      <section id="pricing" className="w-full flex justify-center">
        <div className="w-[var(--max-width)] p-7">
          <SectionSeparator>Pricing plan</SectionSeparator>
          <div className="flex justify-center">
            <div className="p-3 rounded-xl ">
              <h1>Showcase website</h1>
              <PricingList>
                <span>Developement and evolution</span>
                <ul>
                  <li>50% upfront</li>
                  <li>20% on last presentation</li>
                  <li>Rest is due on production deployement</li>
                </ul>
                <span>Maintenance and Hosting</span>
                <ul>
                  <li>Starting from 50$/month</li>
                  <li>The deployement fee is charged on you.</li>
                  <li>
                    I will optimize your ressource usage based on the expected
                    trafic.
                  </li>
                </ul>
              </PricingList>
            </div>
            <div className="p-3 rounded-xl ">
              <h1>Web-application</h1>
              <PricingList>
                <span>developement and evolution</span>
                <ul>
                  <li>Pricing isolated between each features.</li>
                  <li>
                    Each feature is created within a cycle of developement or{" "}
                    <strong className="text-secondary">run</strong>.
                  </li>
                  <li>50% before the run</li>
                  <li>20% on last presentation</li>
                  <li>Rest is due on production deployement</li>
                </ul>
              </PricingList>
            </div>
          </div>
        </div>
      </section>
    );
}