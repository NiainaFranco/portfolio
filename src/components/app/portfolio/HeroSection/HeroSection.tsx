import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import { Greeting } from "./Greeting";
import { Carrousel } from "../Carrousel/Carrousel";

export default function HeroSection() {
  return (
    <div
      id="hero"
      className={`
        p-3
        w-full flex flex-col relative items-center h-[500px]
        mt-[50px]
        lg:flex-row
      `}
    >
      <div className={`w-full z-20`}>
        <div className="w-full pt-7">
          <h1
            className={`
                lg:text-start
                text-2xl text-center w-full text-gray-700
              `}
          >
            <Greeting greetings={["Bonjour", "Hello", "Manaona"]} />, je suis
            Niaina Franco
          </h1>
          <h2
            className={`
              lg:text-start
              text-3xl w-full text-center font-bold text-gold
            `}
          >
            Créateur de Solution Digital.
          </h2>
        </div>
        <div
          className={`w-full pt-4 gap-3 flex
            justify-center lg:justify-start`}
        >
          <CTA2 href="#projects">Projects</CTA2>
          <CTA1 href="#footer">Contact</CTA1>
        </div>
      </div>
      <div className="w-full h-full">
        <Carrousel
          carrouselImages={[
            "/images/carrousel/mindi-s/create_order_page.png",
            "/images/carrousel/mindi-s/create_product.png",
            "/images/carrousel/darkthunder/2.png",
            "/images/carrousel/darkthunder/7.png",
            "/images/carrousel/darkthunder/9.png",
          ]}
        />
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
