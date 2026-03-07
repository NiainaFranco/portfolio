import Image from "next/image";
import { ReactNode } from "react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-jade-light">
      <div className="mt-[80px] flex justify-between flex-wrap text-white">
        <div className="sm:pl-[70] pl-4 py-8">
          <h1 className="text-3xl">Contacts</h1>
          <div className="sm:pt-[40] pt-4 flex flex-col gap-3">
            <ContactText label="Gmail">
              niainafrancoroberto@gmail.com
            </ContactText>
            <ContactText label="Phone">038 21 515 48</ContactText>
            <ContactText label="LinkedIn">Niaina Franco Roberto</ContactText>
            <ContactText label="Github">hidden-machina</ContactText>
            <ContactText label="Freelancer">Niaina Franco</ContactText>
          </div>
        </div>
        <div className="lg:w-[500px] w-full flex justify-center p-7 flex-col items-center">
          <div className="w-full">
            <h1 className="text-2xl text-center">Niaina Franco</h1>
            <h2 className="text-xl text-gold text-center">
              Créateur de Solution Digitale
            </h2>
          </div>
          <div className="w-full pt-5">
            <p className="text-lg text-center">
              N'hésitez pas a m'envoyer un mail ou un message.
            </p>
            <p className="text-lg pt-2 text-center">
              J'ai hâte de travailler avec vous.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black text-sm px-3 text-white sm:text-right p-1">
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
