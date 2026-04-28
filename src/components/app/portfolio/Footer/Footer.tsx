import { LinkedInIcon } from "@/components/DynamiqueIcons/LinkedInIcon";
import { ContactFooterBentoLink } from "./ContactFooterBentoLink";
import { GithubIcon } from "@/components/DynamiqueIcons/GithubIcon";
import { MailIcon } from "@/components/DynamiqueIcons/MailIcon";
import { WhatsappIcon } from "@/components/DynamiqueIcons/WhatsappIcon";

export default function Footer() {
  return (
    <footer id="contacts" className="w-full mt-[80px] flex justify-center">
      <div className="w-[var(--max-width)]">
        
        <div className="p-7">
          <div className="flex justify-between gap-3">
            <div className="w-[500px] rounded-2xl py-7">
              <h1 className="text-2xl">
                Niaina Franco{" "}
                <strong className="text-secondary">ROBERTO</strong>
              </h1>
              <p className="text-4xl text-primary-900">Software Developer</p>
              <div className="mt-5 text-lg">
                <p className="mt-4">
                  I develop Web-applications, create visual interfaces for{" "}
                  <span className="text-secondary">Showcase Webpage</span>, and
                  optimize your production system based on your{" "}
                  <span className="text-secondary">
                    target number of clients
                  </span>
                  , and <span className="text-secondary">budgets</span>.
                </p>
                <p className="mt-4">
                  I'm thrilled to work with you, contact me
                  using the informations below.
                </p>
                <div className="flex gap-3 pt-3">
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
        <div className="text-xl px-7 pb-7">
          Made by {" "}
          <strong className="text-secondary">Niaina Franco +</strong>
          using Next js and Tailwind Css
        </div>
      </div>
    </footer>
  );
}
