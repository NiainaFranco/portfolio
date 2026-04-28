import { ReactNode } from "react";

export function ServiceOffer(props: {
  illustration: string;
  title: ReactNode;
  developement: ReactNode;
  children?: ReactNode;
}) {
  const { developement, children, illustration, title } = props;
  return (
    <div>
      <div
        className={`lg:w-[900px] w-full items-center flex lg:pl-[40px] bg-[var(--background)] overflow-hidden relative`}
      >
        <div className="lg:w-[200px] lg:h-[200px] w-[120px] h-[120px] flex justify-center items-center p-2">
          <img
            height={500}
            width={500}
            src={`/images/illustrations/${illustration}.png`}
            alt="rocket illustration"
          />
        </div>
        <div className="flex-1 pl-3 lg:p-7">
          <h2 className="lg:text-2xl text-lg">{title}</h2>
          <div className="lg:pt-3 text-sm lg:text-md text-justify flex flex-col gap-3">
            {developement}
          </div>
          <div className="pt-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
