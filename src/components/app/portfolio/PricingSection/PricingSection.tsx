import { SectionSeparator } from "@/components/SectionSeparator";
import { PricingList } from "./PricingList";
import { PricingListSeparator } from "./PricingListSeparator";

export function PricingSection(){
    return (
      <section id="pricing" className="w-full flex justify-center">
        <div className="w-[var(--max-width)] p-7">
          <SectionSeparator>Pricing plan</SectionSeparator>
          <div className="flex justify-center gap-3 pt-4">
            <div className="p-7 rounded-3xl border border-primary-500 shadow-lg bg-white w-[350px]">
              <h1 className="text-3xl text-primary-600 w-full text-center">Showcase website</h1>
              <PricingList>
                <PricingListSeparator>Developement</PricingListSeparator>
                <ul>
                  <li><strong className="text-secondary">50%</strong> upfront.</li>
                  <li><strong className="text-secondary">50%</strong> on last presentation.</li>
                </ul>
                <PricingListSeparator>Maintenances</PricingListSeparator>
                <ul>
                  <li>Starting from <strong className="text-secondary">50$/month</strong></li>
                  <li>The deployement fee is charged on you.</li>
                  <li>
                    I will optimize your ressource usage based on the expected
                    trafic.
                  </li>
                </ul>
              </PricingList>
            </div>
            <div className="p-7 rounded-3xl shadow-lg w-[350px]">
            <h1 className="text-3xl text-primary-600 w-full text-center">Web-application</h1>
              <PricingList>
                <PricingListSeparator>Developement</PricingListSeparator>
                <ul>
                  <li>Pricing isolated between each features.</li>
                  <li>
                    Each feature is created within a cycle of developement or{" "}
                    <strong className="text-secondary">run</strong>.
                  </li>
                  <li><strong className="text-secondary">50%</strong> before a run.</li>
                  <li><strong className="text-secondary">50%</strong> on on the deadline.</li>
                </ul>
              </PricingList>
            </div>
          </div>
        </div>
      </section>
    );
}