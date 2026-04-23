"use client"
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { ServiceOffer } from "./ServiceOffer"
import { ReactNode } from "react";

export function ServicesSection() {
  return (
     <Parallax speed={10} easing={[1,2,0.4,1]}>
     <div id="services" className="w-full rounded-4xl bg-primary-500 p-7 gap-7 flex flex-col items-center">
      <div className="w-full">
        <div className="w-full flex flex-col gap-7">
          <ServiceOffer
            illustration="rocket-illustration"
            developement={
              <>
                <p>
                  Visibility when running a business is key, and I can't count
                  on my hands how many times I actually though about finding the
                  website of a product I'm interested in and there where just
                  not a website for it.
                </p>
                <p>
                  Let's make your business accessible for clients and potentiel
                  parteners with a strong, clear, professional and beautifull
                  website.
                </p>
              </>
            }
            title={
              <p>
                Create and{" "}
                <span className="text-secondary font-bold">boost </span>
                your online visibility
              </p>
            }
          >
            <div className="pt-5">
              <AnchorButton>
                Get started
              </AnchorButton>
            </div>
          </ServiceOffer>
          <div className="flex w-full justify-end">
           <ServiceOffer
            illustration="brick-illustration"
            developement={
              <>
                <p>
                  If you have an idea about a digital solution that solves real
                  problem and pain for peoples but don't know where to start,
                  let's build it together.
                </p>
                <p>
                  Use your idea paired with my experiences to create and
                  automate a solution that can solve your problems and quickly
                  scale.
                </p>
              </>
            }
            title={
              <p>
                Build your digital solution with me{" "}
                <span className="text-secondary font-bold">
                  brick by brick.{" "}
                </span>
              </p>
            }
          >
            <div className="pt-5">
              <AnchorButton>
                Start Building
              </AnchorButton>
            </div>
          </ServiceOffer>
            
          </div>
         <ServiceOffer
            illustration="collaboration-illustration"
            developement={
              <>
                <p>
                  I help you wrap up, bugfix and optimize your projects when you
                  just don't have enough time or when you really want to hit the
                  gas and clear your schedule.
                </p>
                <p>
                  Spliting the workload don't just ease your brain, it gives you
                  the oportunity to think about the next step and hand over part
                  of the problem to another professional.
                </p>
              </>
            }
            title={
              <p>
                Let's{" "}
                <span className="text-secondary font-bold">collaborate </span>
                as professionals on your projects.
              </p>
            }
          >
            <div className="pt-5">
              <AnchorButton>
                Contact now
              </AnchorButton>
            </div>
          </ServiceOffer>
        </div>
      </div>
    </div>
     
    </Parallax>
  );
}

function AnchorButton(props: {
  href?:string
  children?: ReactNode
}){
  const {href, children} = props
  return(
    <a href={href} className="rounded-xl w-[fit-content] bg-secondary px-3 block py-2 text-white">{children}</a>    
  )
}
