export function OfferSection() {
  return (
    <div className="w-full p-7 gap-7 flex flex-col items-center">
      <h1 className="text-5xl bg-primary-500 p-3 text-white font-extrabold">
        Services
      </h1>
      <div className="w-full">
        <div className="w-full flex flex-col">
          <div className="flex">
            <div className="w-[400px] h-[400px] p-2">
              <img
                src="/images/illustrations/rocket-illustration.png"
                alt="rocket illustration"
              />
            </div>
            <div className="flex-1 pl-7">
              <h2 className="text-5xl">
                Boost your online{" "}
                <span className="text-secondary font-bold">visibility</span>.
              </h2>
              <div className="pt-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo aspernatur, reiciendis quos, dolorum praesentium
                  ullam eveniet officiis libero quia, tenetur veritatis
                  voluptates nostrum eum dolores sapiente. Odit ex officiis
                  laborum.
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-[400px] flex justify-center items-center p-2 h-[400px]">
              <img
                src="/images/illustrations/brick-illustration.png"
                alt="rocket illustration"
              />
            </div>
            <div className="flex-1 pl-7">
              <h2 className="text-5xl">
                Build your Webapplication with me{" "}
                <span className="text-secondary font-bold">
                  brick by brick.{" "}
                </span>
              </h2>
              <div className="pt-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo aspernatur, reiciendis quos, dolorum praesentium
                  ullam eveniet officiis libero quia, tenetur veritatis
                  voluptates nostrum eum dolores sapiente. Odit ex officiis
                  laborum.
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-[400px] flex justify-center items-center p-2 h-[400px]">
              <img
                src="/images/illustrations/collaboration-illustration.png"
                alt="rocket illustration"
              />
            </div>
            <div className="flex-1 pl-7">
              <h2 className="text-5xl">
                Let's {" "}
                <span className="text-secondary font-bold">
                  collaborate{" "}
                </span>
                as professionals on your projects.
              </h2>
              <div className="pt-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo aspernatur, reiciendis quos, dolorum praesentium
                  ullam eveniet officiis libero quia, tenetur veritatis
                  voluptates nostrum eum dolores sapiente. Odit ex officiis
                  laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
