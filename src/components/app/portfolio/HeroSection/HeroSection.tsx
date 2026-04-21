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
        gap-3
      `}
    >
      <div className="w-[550px] flex flex-col gap-3">
        <div className="w-full h-[395px] rounded-3xl py-6">
          <h1 className="text-6xl">
            Niaina Franco <strong className="text-secondary">ROBERTO</strong>
          </h1>
          <p className="mt-4">
            I'm a Webpage designer, Software engeneer and IT consultant for
            production level Web-applications optimization.{" "}
          </p>
          <p className="mt-4">
            I develop{" "}
            <strong className="text-primary-600">Web-applications</strong>,
            create visual interface for{" "}
            <strong className="text-primary-600">Showcase Webpage</strong>,
             and optimize your
            production system based on your{" "} 
            <strong className="text-primary-600">target number of clients</strong>,
            and your{" "}
            <strong className="text-primary-600">budgets</strong>.
          </p>
          <p className="mt-4">
            My work area focus on Javascript and PHP projects.{" "}
          </p>
        </div>
        <div className="flex gap-3">
          <BentoLink label={"+10"} aux="Frameworks and tools used" size={165} />
          <BentoLink label={"7"} aux="Projects shiped" size={165} />
          <BentoLink label={"0$"} aux="To make a quote" size={165} />
        </div>
      </div>
      <div className="w-full flex flex-col gap-3">
        <div className="bg-primary-500 h-[100px] gap-3  p-3 rounded-3xl flex w-full">
          <ContactBentoLink iconName="linkedIn" size={80} />
          <ContactBentoLink iconName="gmail" size={80} />
          <ContactBentoLink iconName="whatsapp" size={80} />
          <ContactBentoLink iconName="github" size={80} />
        </div>
        <div className="h-[460px] bg-secondary relative rounded-3xl">
          <div className="w-full z-10 h-full overflow-hidden rounded-3xl absolute">
            <Image
              height={900}
              className="w-[490px] h-[490px]"
              width={900}
              src="/images/presentation-image.png"
              alt="presentation image"
            />
          </div>
          <div className="w-full z-20 h-full bg-secondary opacity-50 rounded-3xl absolute"></div>
          <div className="absolute z-30 tracking-widest font-outlined pl-6">
            <h1 className="text-[5em] text-bold text-primary-500">Developer</h1>
            <h1 className="text-[5em] text-bold text-primary-500 opacity-80">
              Developer
            </h1>
            <h1 className="text-[5em] text-bold text-white">
              Developer
            </h1>
            <h1 className="text-[5em] text-bold text-primary-500 opacity-40">
              Developer
            </h1>
          </div>
        </div>
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
