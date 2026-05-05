import { ServiceOffer } from "./ServiceOffer";
import { ReactNode } from "react";
import { SectionSeparator } from "@/components/SectionSeparator";
import { useTranslations } from "next-intl";
import { highlight } from "@/components/Highlight";

export function ServicesSection() {
  const tboost = useTranslations("ServicesSection.boost");
  const tbuild = useTranslations("ServicesSection.build");
  const tcollaborate = useTranslations("ServicesSection.collaborate");
  const tnavigation = useTranslations("Navigation");
  return (
    <div
      id="services"
      className="w-full lg:p-7 py-7 gap-7 flex flex-col items-center"
    >
      <div className="lg:w-[var(--max-width)] w-full px-3 lg:px-7 rounded-3xl">
        <SectionSeparator>{tnavigation("services")}</SectionSeparator>
        <div className="w-full flex py-7 flex-col gap-5">
          <ServiceOffer
            illustration="rocket-illustration"
            developement={
              <>
                <p>{tboost("text")}</p>
              </>
            }
            title={
              <p className="text-primary-600">
                {tboost.rich("title", highlight())}
              </p>
            }
          >
            <AnchorButton>{tboost("cta")}</AnchorButton>
          </ServiceOffer>
          <div className="flex w-full justify-end">
            <ServiceOffer
              illustration="brick-illustration"
              developement={
                <>
                  <p>{tbuild("text")}</p>
                </>
              }
              title={
                <p className="text-primary-600">
                  {tbuild.rich("title", highlight())}
                </p>
              }
            >
              <AnchorButton>{tbuild("cta")}</AnchorButton>
            </ServiceOffer>
          </div>
          <ServiceOffer
            illustration="collaboration-illustration"
            developement={
              <>
                <p>{tcollaborate("text")}</p>
              </>
            }
            title={
              <p className="text-primary-600">
                {tcollaborate.rich("title", highlight())}
              </p>
            }
          >
            <AnchorButton>{tcollaborate("cta")}</AnchorButton>
          </ServiceOffer>
        </div>
      </div>
    </div>
  );
}

function AnchorButton(props: { href?: string; children?: ReactNode }) {
  const { href, children } = props;
  return (
    <a
      href={href}
      className="rounded-xl w-[fit-content] bg-secondary px-3 block py-2 text-white"
    >
      {children}
    </a>
  );
}
