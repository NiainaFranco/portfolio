import { LinkedInIcon } from "@/components/DynamiqueIcons/LinkedInIcon";
import { ContactFooterBentoLink } from "./ContactFooterBentoLink";
import { GithubIcon } from "@/components/DynamiqueIcons/GithubIcon";
import { MailIcon } from "@/components/DynamiqueIcons/MailIcon";
import { WhatsappIcon } from "@/components/DynamiqueIcons/WhatsappIcon";
import { SectionSeparator } from "@/components/SectionSeparator";
import { useTranslations } from "next-intl";
import { highlight } from "@/components/Highlight";

export default function Footer() {
  const t = useTranslations("ContactsSection");
  const tnavigation = useTranslations("Navigation")
  return (
    <footer id="contacts" className="w-full mt-[80px] flex justify-center">
      <div className="lg:w-[var(--max-width)] w-full">
        <div className="lg:p-7 p-3">
        <SectionSeparator>{tnavigation("contacts")}</SectionSeparator>
          <div className="flex justify-between gap-3">
            <div className="lg:w-[500px] w-full rounded-2xl py-7">
              <h1 className="text-2xl">
                Niaina Franco{" "}
                <strong className="text-secondary">ROBERTO</strong>
              </h1>
              <p className="text-4xl text-primary-900">{t("title")}</p>
              <div className="mt-5 text-justify text-lg">
                <p className="mt-4">
                  {t.rich("text1", highlight())}
                </p>
                <p className="mt-4">
                  {t.rich("text2", highlight())}
                </p>
                <div className="flex flex-wrap gap-3 pt-3">
                  <ContactFooterBentoLink
                    href="https://www.linkedin.com/in/franco-roberto-657241276/"
                    size={45}
                    icon={
                      <LinkedInIcon className="group-hover:fill-primary-500 fill-white" />
                    }
                  />
                  <ContactFooterBentoLink
                    href="https://github.com/NiainaFranco/"
                    size={45}
                    icon={
                      <GithubIcon className="group-hover:fill-primary-500 fill-white" />
                    }
                  />
                  <ContactFooterBentoLink
                    size={45}
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
      </div>
    </footer>
  );
}
