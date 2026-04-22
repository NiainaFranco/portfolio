import Image from "next/image";
import { ReactNode } from "react";
import { ContactFooterBentoLink } from "./ContactFooterBentoLink";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="mt-[80px] p-7">
        <div className="flex justify-between gap-3">
          <div className="w-[500px] rounded-2xl p-7">
            <h1 className="text-2xl">Niaina Franco <strong className="text-secondary">ROBERTO</strong></h1>
            <p className="text-4xl text-primary-900">Software Developer</p>
            <div className="mt-5 text-lg">
              <p className="mt-4">
                I develop Web-applications, create visual interfaces for{" "}
                <span className="text-secondary">Showcase Webpage</span>, and
                optimize your production system based on your{" "}
                <span className="text-secondary">target number of clients</span>,
                and <span className="text-secondary">budgets</span>.
              </p>
              <p className="mt-4">
                I'm thrilled to work with you, don't hesitate to contact me
                using the informations below.
              </p>
            </div>
          </div>
          <div className="[&>a]:underline text-black text-center w-[200px] gap-3 text-xl flex flex-col p-7 rounded-2xl">
            <h2 className="text-2xl font-bold">Usefull links</h2>
            <a href="#hero">Home</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
          </div>
        </div>
        <div className="w-full flex flex-wrap p-7 gap-2">
          <ContactFooterBentoLink iconName="linkedIn">
            Niaina Franco Roberto
          </ContactFooterBentoLink>
          <ContactFooterBentoLink iconName="gmail">
            niainafrancoroberto@gmail.com
          </ContactFooterBentoLink>
          <ContactFooterBentoLink iconName="whatsapp">
            038 21 515 48
          </ContactFooterBentoLink>
          <ContactFooterBentoLink iconName="github">
            NiainaFranco
          </ContactFooterBentoLink>
        </div>
      </div>
      <div className="text-lg text-end px-7 p-1 bg-primary-950 text-white font-bold rounded-t-xl">
        Made by niainafrancoroberto@gmail.com using Next js and Tailwind Css
      </div>
    </footer>
  );
}

function ContactText(props: { label?: string; children?: ReactNode }) {
  const { children, label } = props;
  return (
    <div>
      <div>
        <h2 className="text-lg">{label} :</h2>
      </div>
      <div>
        <p className="text-md text-gray-200">{children}</p>
      </div>
    </div>
  );
}
