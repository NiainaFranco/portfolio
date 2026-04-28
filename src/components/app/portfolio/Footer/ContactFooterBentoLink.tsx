import { ReactNode } from "react";

export function ContactFooterBentoLink(props: {
  size?: number;
  children?: string;
  icon: ReactNode;
  href?: string;
}) {
  const { size, href, icon, children } = props;
  return (
    <a
      href={href}
      className="shadow-sm flex gap-1 items-center text-white hover:text-primary-500 hover:shadow-md group hover:bg-[var(--background)] duration-[300ms] bg-primary-500 rounded-xl p-2 "
    >
      <div
        style={{
          width: size,
          height: size,
        }}
      >
        {icon}
      </div>
      {children && <div>{children}</div>}
    </a>
  );
}
