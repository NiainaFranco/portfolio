import { SectionSeparator } from "@/components/SectionSeparator";
import { PricingList } from "./PricingList";
import { PricingListSeparator } from "./PricingListSeparator";
import { useTranslations } from "next-intl";
import { highlight } from "@/components/Highlight";

export function PricingSection() {
  const twebsite = useTranslations("PricingSection.website");
  const twebApp = useTranslations("PricingSection.webApp");
  const tnavigation = useTranslations("Navigation");
  return (
    <section id="pricing" className="w-full flex justify-center">
      <div className="lg:w-[var(--max-width)] w-full p-3 lg:p-7">
        <SectionSeparator>{tnavigation("pricing")}</SectionSeparator>
        <div className="lg:flex-row flex flex-col justify-center gap-3 pt-7">
          <div className="p-7 rounded-3xl border-4 border-primary-500 shadow-lg bg-white w-full lg:w-[350px]">
            <h1 className="text-3xl text-primary-600 w-full text-center">
              {twebsite("title")}
            </h1>
            <PricingList>
              <PricingListSeparator>
                {twebsite("developement.title")}
              </PricingListSeparator>
              <ul>
                <li>{twebsite.rich("developement.line1", highlight())}</li>
                <li>{twebsite.rich("developement.line2", highlight())}</li>
              </ul>
              <PricingListSeparator>Maintenances</PricingListSeparator>
              <ul>
                <li>{twebsite.rich("maintenance.line1", highlight())}</li>
                <li>{twebsite.rich("maintenance.line2", highlight())}</li>
              </ul>
            </PricingList>
          </div>
          <div className="p-7 rounded-3xl border-4 border-primary-500 shadow-lg bg-white w-full lg:w-[350px]">
            <h1 className="text-3xl text-primary-600 w-full text-center">
              {twebApp("title")}
            </h1>
            <PricingList>
              <PricingListSeparator>
                {twebApp.rich("developement.title", highlight())}
              </PricingListSeparator>
              <ul>
                <li>{twebApp.rich("developement.line1", highlight())}</li>
                <li>{twebApp.rich("developement.line2", highlight())}</li>
                <li>{twebApp.rich("developement.line3", highlight())}</li>
                <li>{twebApp.rich("developement.line4", highlight())}</li>
              </ul>
            </PricingList>
          </div>
        </div>
      </div>
    </section>
  );
}
