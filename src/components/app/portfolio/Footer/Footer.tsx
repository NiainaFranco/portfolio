import { LinkedInIcon } from "@/components/DynamiqueIcons/LinkedInIcon";
import { ContactFooterBentoLink } from "./ContactFooterBentoLink";
import { GithubIcon } from "@/components/DynamiqueIcons/GithubIcon";
import { MailIcon } from "@/components/DynamiqueIcons/MailIcon";
import { WhatsappIcon } from "@/components/DynamiqueIcons/WhatsappIcon";
import { SectionSeparator } from "@/components/SectionSeparator";
import { useTranslations } from "next-intl";
import { highlight } from "@/components/Highlight";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export default function Footer() {
  const t = useTranslations("ContactsSection");
  const tnavigation = useTranslations("Navigation");
  return (
    <footer
      id="contacts"
      className="w-full h-[450px] mt-[80px] flex flex-col items-center"
    >
      <div className="lg:max-w-[var(--max-width)] w-[var(--max-width)] w-full">
        <div className="lg:p-7 p-3">
          {/* <SectionSeparator>{tnavigation("contacts")}</SectionSeparator> */}
          <div className="lg:flex-row md:flex-row flex flex-col justify-between gap-3">
            <div className="lg:w-[500px] w-full rounded-2xl md:py-7 lg:py-7">
              <h1 className="lg:text-6xl md:text-6xl text-3xl">
                Niaina Franco{" "}
                <strong className="text-secondary">ROBERTO</strong>
              </h1>
              <p className="lg:text-4xl md:text-4xl text-2xl text-primary-600">{t("title")}</p>
              <div className="mt-5 text-justify text-md">
                <p className="mt-4">{t.rich("text1", highlight())}</p>
                <p className="mt-4">{t.rich("text2", highlight())}</p>
              </div>
            </div>
            <div className="flex-1 flex flex-col md:py-7 py-4 lg:py-7">
              <h2 className="lg:text-5xl text-3xl w-full text-secondary lg:text-end">
                {tnavigation("contacts")}
              </h2>
              <div className="flex flex-wrap lg:justify-end gap-3 pt-4">
                <ContactFooterBentoLink
                  href="https://www.linkedin.com/in/franco-roberto-657241276/"
                  size={45}
                  icon={
                    <LinkedInIcon className="group-hover:fill-primary-500 fill-white" />
                  }
                >
                  Niaina Franco Roberto
                </ContactFooterBentoLink>
                <ContactFooterBentoLink
                  href="https://github.com/NiainaFranco/"
                  size={45}
                  icon={
                    <GithubIcon className="group-hover:fill-primary-500 fill-white" />
                  }
                >
                  Niaina Franco
                </ContactFooterBentoLink>
                <ContactFooterBentoLink
                  size={45}
                  href="mailto:niainafrancoroberto@gmail.com"
                  icon={
                    <MailIcon className="group-hover:fill-primary-500 fill-white" />
                  }
                >
                  niainafrancoroberto@gmail.com
                </ContactFooterBentoLink>
                <ContactFooterBentoLink
                  size={45}
                  icon={
                    <WhatsappIcon className="group-hover:fill-primary-500 fill-white" />
                  }
                >
                  0382151548
                </ContactFooterBentoLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full justify-center flex border-t border-t-primary-500">
        <section className="lg:max-w-[var(--max-width)] w-[var(--max-width)] p-3 lg:p-7">
          <ul className="lg:flex-row flex flex-col gap-1">
            <FooterLiAnchor href="#hero">{tnavigation("home")}</FooterLiAnchor>
            <FooterLiAnchor href="#services">{tnavigation("services")}</FooterLiAnchor>
            <FooterLiAnchor href="#about-me">{tnavigation("aboutMe")}</FooterLiAnchor>
            <FooterLiAnchor href="#projects">{tnavigation("projects")}</FooterLiAnchor>
          </ul>
        </section>
      </div>
    </footer>
  );
}

function FooterLiAnchor(props: { children?: ReactNode, href?: string}) {
  const { children, href } = props;
  return (
    <li className="p-2 hover:bg-primary-200 rounded-xl duration-[500ms]">
      <a href={href}>{children}</a>
    </li>
  );
}
