import type { SVGProps } from "react";

export function Components(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <defs>
        <mask id="ipTComponents0">
          <path
            fill="#555"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="m17 11l7-7l7 7l-7 7zm13 14l7-7l7 7l-7 7zM17 37l7-7l7 7l-7 7zM4 24l7-7l7 7l-7 7z"
          ></path>
        </mask>
      </defs>
      <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTComponents0)"></path>
    </svg>
  );
}
