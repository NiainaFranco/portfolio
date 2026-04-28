export function HamburgerIcon(props: {
    className?: string
}) {
const { className } = props
  return (
    <svg
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Menu</title>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Menu">
          <rect
            id="Rectangle"
            fillRule="nonzero"
            x="0"
            y="0"
            width="24"
            height="24"
          ></rect>
          <line
            className={className}
            x1="5"
            y1="7"
            x2="19"
            y2="7"
            id="Path"
            strokeWidth="2"
            strokeLinecap="round"
          ></line>
          <line
            x1="5"
            className={className}
            y1="17"
            x2="19"
            y2="17"
            id="Path"
            strokeWidth="2"
            strokeLinecap="round"
          ></line>
          <line
            x1="5"
            y1="12"
            x2="19"
            className={className}
            y2="12"
            id="Path"
            strokeWidth="2"
            strokeLinecap="round"
          ></line>
        </g>
      </g>
    </svg>
  );
}
