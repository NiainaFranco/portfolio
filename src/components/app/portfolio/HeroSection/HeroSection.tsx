import { BentoLink } from "./BentoLink";
import Image from "next/image";
import "./HeroSection.css";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("HeroSection");
  return (
    <div
      id="hero"
      className={`
        lg:p-7
        p-3
        w-full
        lg:w-[var(--max-width)] flex flex-col-reverse sm:flex-row lg:flex-row relative
        justify-between
        gap-7
      `}
    >
      <div className="lg:w-[550px] w-full flex flex-col gap-3">
        <div className="w-full h-[fit-content] lg:h-[395px] rounded-3xl py-6">
          <div className="hidden lg:block">
            <h1 className="text-6xl pb-3">
              Niaina Franco <strong className="text-secondary">ROBERTO</strong>
            </h1>
            <span className="text-4xl text-primary-600">{t("jobName")}</span>
          </div>
          <div className="text-lg text-justify">
            <p className="mt-4">
              I'm a Webpage designer, Software developer and IT consultant for
              production level Web-applications optimization.
            </p>
            <p className="mt-4">
              I develop{" "}
              <strong className="text-secondary">Web-applications</strong>,
              create visual interfaces for{" "}
              <strong className="text-secondary">Showcase Website</strong>, and
              optimize your production system based on your{" "}
              <strong className="text-secondary">
                target number of clients
              </strong>
              , and <strong className="text-secondary">budgets</strong>.
            </p>
          </div>
        </div>
        <div className="flex gap-3 justify-between [&>a]:lg:w-[170px] [&>a]:lg:h-[170px] [&>a]:w-[150px] [&>a]:h-[150px]">
          <BentoLink
            href="#about-me"
            label={"+10"}
            aux="Frameworks and tools used"
          />
          <BentoLink label={"2"} href="#projects" aux="Projects MVP" />
          <BentoLink label={"0$"} href="#pricing" aux="To make a quote" />
        </div>
      </div>
      <div className="w-full flex gap-3 flex-col">
        <div className="w-full h-full overflow-y-hidden flex">
          <div className="h-full flex-1 relative rounded-tl-3xl rounded-b-3xl">
            <div className="w-full flex flex-col gap-5 lg:flex-row items-center justify-center h-full items-center">
              <div className="block w-full lg:hidden">
                <h1 className="text-2xl w-full text-center">
                  Niaina Franco{" "}
                  <strong className="text-center text-secondary">
                    ROBERTO
                  </strong>
                </h1>
                <p className="text-xl text-center w-full text-primary-600">
                  Software Developer
                </p>
              </div>
              <div className="presentation-image-custom-shape w-[250px] h-[250px] sm:w-[570px] sm:h-[570px] bg-primary-500 border-primary-500 z-10 relative">
                <Image
                  height={900}
                  className="drop-shadow-lg/60 aspect-square w-full h-full"
                  width={900}
                  src="/images/presentation-image.jpg"
                  alt="presentation image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
