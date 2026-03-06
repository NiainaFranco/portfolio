import { AnchorHTMLAttributes, DetailedHTMLProps } from "react"
import { Greeting } from "./Greeting";
import { Carrousel, CarrouselImage } from "../Carrousel/Carrousel";

export default function HeroSection(){
    return (
        <div id="hero" className="w-full flex relative items-center h-[600px]">
          <div className="w-[50%] z-20">
            <div className="w-full px-7 pt-7">
              <h1 className="text-2xl w-full text-gray-700">
                <Greeting greetings={["Bonjour", "Hello", "Manaona"]} />, je
                suis Niaina Franco
              </h1>
              <h2 className="text-3xl w-full font-bold text-gold">
                Créateur de Solution Digital.
              </h2>
            </div>
            <div className="w-full px-7 pt-4 gap-3 flex">
              <CTA2 href="#projects">Projects</CTA2>
              <CTA1 href="#footer">Contact</CTA1>
            </div>
          </div>
          <div className="w-[50%] h-full">
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

export function CTA1(props: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>){
    return(
        <a {...props} className="block bg-white text-jade-light border border-jade-light py-2 px-7 shadow-lg rounded-full" />
    )
}

export function CTA2(props: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>){
    return(
        <a {...props} className="block bg-jade-light text-white shadow-lg py-2 px-7 rounded-full" />
    )
}