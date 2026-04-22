export function OfferSection() {
  return (
    <div id="services" className="w-full p-7 gap-7 flex flex-col items-center">
      <div className="w-full">
        <div className="w-full flex flex-col gap-7">
          <div className="flex">
            <div className="w-[400px] h-[400px] flex justify-center items-center p-2">
              <img
                src="/images/illustrations/rocket-illustration.png"
                className="h-[330px]"
                alt="rocket illustration"
              />
            </div>
            <div className="flex-1 p-7">
              <h2 className="text-4xl">
                Create and{" "}
                <span className="text-secondary font-bold">boost </span>
                your online visibility
              </h2>
              <div className="pt-3 text-lg text-justify flex flex-col gap-2">
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
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-[400px] flex justify-center items-center p-2 h-[400px]">
              <img
                src="/images/illustrations/brick-illustration.png"
                height={300}
                alt="rocket illustration"
              />
            </div>
            <div className="flex-1 p-7">
              <h2 className="text-4xl">
                Build your digital solution with me{" "}
                <span className="text-secondary font-bold">
                  brick by brick.{" "}
                </span>
              </h2>
              <div className="pt-3 text-lg text-justify flex flex-col gap-3">
                <p>
                  If you have an idea about a digital solution that solves real
                  problem and pain for peoples but don't know where to start,
                  let's build it together.
                </p>
                <p>
                  Use your idea paired with my experiences to create and automate a
                  solution that can solve your problems and quickly scale.
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-[400px] flex justify-center items-center p-2 h-[400px]">
              <img
                src="/images/illustrations/collaboration-illustration.png"
                height={300}
                alt="rocket illustration"
              />
            </div>
            <div className="flex-1 p-7">
              <h2 className="text-4xl">
                Let's{" "}
                <span className="text-secondary font-bold">collaborate </span>
                as professionals on your projects.
              </h2>
              <div className="pt-3 text-justify flex gap-3 text-lg flex-col">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
