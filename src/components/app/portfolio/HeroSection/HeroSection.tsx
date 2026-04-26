import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import { BentoLink } from "./BentoLink";
import { ContactBentoLink } from "./ContactBentoLink";
import Image from "next/image";
import { GithubIcon } from "@/components/DynamiqueIcons/GithubIcon";
import { LinkedInIcon } from "@/components/DynamiqueIcons/LinkedInIcon";
import { MailIcon } from "@/components/DynamiqueIcons/MailIcon";
import "./HeroSection.css"

export default function HeroSection() {
  return (
    <div
      id="hero"
      className={`
        p-7
        w-[var(--max-width)] flex relative
        justify-between
        gap-7
      `}
    >
      <div className="w-[550px] flex flex-col gap-3">
        <div className="w-full h-[395px] rounded-3xl py-6">
          <h1 className="text-6xl pb-3">
            Niaina Franco <strong className="text-secondary">ROBERTO</strong>
          </h1>
          <span className="text-4xl text-gray-600">Software Developer</span>
          <div className="text-lg text-justify">
            <p className="mt-4">
              I'm a Webpage designer, Software developer and IT consultant for
              production level Web-applications optimization.{" "}
            </p>
            <p className="mt-4">
              I develop{" "}
              <strong className="text-secondary">Web-applications</strong>,
              create visual interfaces for{" "}
              <strong className="text-secondary">Showcase Webpage</strong>, and
              optimize your production system based on your{" "}
              <strong className="text-secondary">
                target number of clients
              </strong>
              , and <strong className="text-secondary">budgets</strong>.
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <BentoLink label={"+10"} aux="Frameworks and tools used" size={170} />
          <BentoLink
            label={"7"}
            href="#projects"
            aux="Projects shiped"
            size={170}
          />
          <BentoLink
            label={"0$"}
            href="#contacts"
            aux="To make a quote"
            size={170}
          />
        </div>
      </div>
      <div className="w-full flex gap-3 flex-col">
        <div className="w-full h-full overflow-y-hidden flex">
          <div className="h-full flex-1 relative rounded-tl-3xl rounded-b-3xl">
            <div className="w-full flex justify-center h-full items-center">
              <div className="presentation-image-custom-shape w-[570px] h-[570px] bg-primary-500  border-primary-500 z-10 relative">
                <Image
                  height={900}
                  className="drop-shadow-lg/60 aspect-square w-full h-full"
                  width={900}
                  src="/images/presentation-image.jpg"
                  alt="presentation image"
                />
              </div>
            </div>
            {/* <div className="px-3 absolute top-0 right-0 pt-3 flex-col items-center flex gap-3 bg-[var(--background)]">
              <ContactBentoLink
                href="https://www.linkedin.com/in/franco-roberto-657241276/"
                size={80}
                icon={
                  <LinkedInIcon className="group-hover:fill-primary-500 fill-white" />
                }
              />
              <ContactBentoLink
                href="https://github.com/NiainaFranco/"
                size={80}
                icon={
                  <GithubIcon className="group-hover:fill-primary-500 fill-white" />
                }
              />
              <ContactBentoLink
                icon={
                  <MailIcon className="group-hover:fill-primary-500 fill-white" />
                }
                size={80}
              />
            </div> */}
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
      className="block bg-[var(--background)] text-jade-light border border-jade-light py-2 px-7 shadow-lg rounded-full"
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
