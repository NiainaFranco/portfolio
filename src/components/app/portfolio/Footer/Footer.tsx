import { ContactFooterBentoLink } from "./ContactFooterBentoLink";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="p-7">
        <div className="flex justify-between gap-3">
          <div className="w-[500px] rounded-2xl py-7">
            <h1 className="text-2xl">
              Niaina Franco <strong className="text-secondary">ROBERTO</strong>
            </h1>
            <p className="text-4xl text-primary-900">Software Developer</p>
            <div className="mt-5 text-lg">
              <p className="mt-4">
                I develop Web-applications, create visual interfaces for{" "}
                <span className="text-secondary">Showcase Webpage</span>, and
                optimize your production system based on your{" "}
                <span className="text-secondary">target number of clients</span>
                , and <span className="text-secondary">budgets</span>.
              </p>
              <p className="mt-4">
                I'm thrilled to work with you, don't hesitate to contact me
                using the informations below.
              </p>
              <div className="flex gap-3 pt-3">
                <ContactFooterBentoLink iconName="linkedIn" />
                <ContactFooterBentoLink iconName="gmail" />
                <ContactFooterBentoLink iconName="github" />
                <ContactFooterBentoLink iconName="whatsapp">
                  038 21 515 48
                </ContactFooterBentoLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xl text-secondary px-7 pb-7">
        Made by niainafrancoroberto@gmail.com using Next js and Tailwind Css
      </div>
    </footer>
  );
}
