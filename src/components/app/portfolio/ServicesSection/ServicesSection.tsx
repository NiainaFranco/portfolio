"use client";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { ServiceOffer } from "./ServiceOffer";
import { ReactNode } from "react";
import { SectionSeparator } from "@/components/SectionSeparator";

export function ServicesSection() {
  return (
    <div
      id="services"
      className="w-full lg:p-7 py-7 gap-7 flex flex-col items-center"
    >
      <div className="lg:w-[var(--max-width)] w-full px-3 lg:px-7 rounded-3xl">
        <SectionSeparator>My Services</SectionSeparator>
        <div className="w-full flex py-7 flex-col gap-5">
          <ServiceOffer
            illustration="rocket-illustration"
            developement={
              <>
                <p>
                  Let's make your business accessible for clients and potentiel
                  parteners with a strong, clear, professional and beautifull
                  website.
                </p>
              </>
            }
            title={
              <p className="text-primary-600">
                Create and{" "}
                <span className="text-secondary font-bold">boost </span>
                your online visibility
              </p>
            }
          >
            <AnchorButton>Get started</AnchorButton>
          </ServiceOffer>
          <div className="flex w-full justify-end">
            <ServiceOffer
              illustration="brick-illustration"
              developement={
                <>
                  <p>
                    Use your idea paired with my experiences to create and
                    automate a solution that can solve your problems and quickly
                    scale.
                  </p>
                </>
              }
              title={
                <p className="text-primary-600">
                  Build your digital solution with me{" "}
                  <span className="text-secondary font-bold">
                    brick by brick.{" "}
                  </span>
                </p>
              }
            >
              <AnchorButton>Start Building</AnchorButton>
            </ServiceOffer>
          </div>
          <ServiceOffer
            illustration="collaboration-illustration"
            developement={
              <>
                <p>
                  I help you wrap up, bugfix and optimize your projects when you
                  just don't have enough time or when you really want to hit the
                  gas and clear your projects schedule.
                </p>
              </>
            }
            title={
              <p className="text-primary-600">
                Let's{" "}
                <span className="text-secondary font-bold">collaborate </span>
                as professionals on your projects.
              </p>
            }
          >
            <AnchorButton>Contact now</AnchorButton>
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
