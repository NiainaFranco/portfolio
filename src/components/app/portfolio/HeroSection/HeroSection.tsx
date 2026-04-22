import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import { BentoLink } from "./BentoLink";
import { ContactBentoLink } from "./ContactBentoLink";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div
      id="hero"
      className={`
        p-7
        w-full flex relative
        justify-between
        gap-7
      `}
    >
      <div className="w-[550px] flex flex-col gap-3">
        <div className="w-full h-[395px] rounded-3xl py-6">
          <h1 className="text-6xl">
            Niaina Franco <strong className="text-secondary">ROBERTO</strong>
          </h1>
          <div className="text-lg text-justify">
            <p className="mt-4">
              I'm a Webpage designer, Software engeneer and IT consultant for
              production level Web-applications optimization.{" "}
            </p>
            <p className="mt-4">
              I develop{" "}
              <strong className="text-secondary">Web-applications</strong>,
              create visual interfaces for{" "}
              <strong className="text-secondary">Showcase Webpage</strong>,
               and optimize your
              production system based on your{" "} 
              <strong className="text-secondary">target number of clients</strong>,
              and {" "}
              <strong className="text-secondary">budgets</strong>.
            </p>
            <p className="mt-4">
              My work area focus on Web-applications projects using javascript.{" "}
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <BentoLink label={"+10"} aux="Frameworks and tools used" size={165} />
          <BentoLink label={"7"} href="#projects" aux="Projects shiped" size={165} />
          <BentoLink label={"0$"} href="#contacts" aux="To make a quote" size={165} />
        </div>
      </div>
      <div className="w-full flex">
        <div className="h-full flex-1 bg-secondary relative rounded-tl-3xl rounded-b-3xl">
          <div className="w-full z-10 h-full overflow-hidden rounded-3xl absolute">
            <Image
              height={900}
              className="min-w-[590px] min-h-[590px]"
              width={900}
              src="/images/presentation-image.png"
              alt="presentation image"
            />
          </div>
          <div role="overlay" className="w-full z-20 h-full bg-secondary opacity-60 rounded-3xl absolute"></div>
          <div className="absolute z-30 tracking-widest font-outlined pl-6">
            <h1 className="text-[6em] text-primary-300">Developer</h1>
            <h1 className="text-[6em] text-primary-300 opacity-40">
              Developer
            </h1>
            <h1 className="text-[6em] text-white">
              Developer
            </h1>
            <h1 className="text-[6em] text-primary-300 opacity-40">
              Developer
            </h1>
          </div>
        </div>
          <div className="h-full flex flex-col justify-between w-[100px]">
            <div className="flex-1 bg-secondary rounded-r-3xl">
              
            </div>
            <div className="w-[100px] z-30 bg-secondary">
              <div className="rounded-tl-3xl px-3 pt-3 flex-col flex gap-3 bg-[var(--background)]">
                <ContactBentoLink href="https://www.linkedin.com/in/franco-roberto-657241276/" iconName="linkedIn" size={80} />
                <ContactBentoLink href="https://github.com/NiainaFranco/" iconName="github" size={80} />
                <ContactBentoLink iconName="gmail" size={80} />
              </div>
            </div>
          </div >
      </div>
    </div>
  );
}

export function CTA1(
  props: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) {
  return (
    <a
      {...props}
      className="block bg-white text-jade-light border border-jade-light py-2 px-7 shadow-lg rounded-full"
    />
  );
}

export function CTA2(
  props: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) {
  return (
    <a
      {...props}
      className="block bg-jade-light text-white shadow-lg py-2 px-7 rounded-full"
    />
  );
}
