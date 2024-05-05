import type { SVGProps } from "react";

export function Table(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48" {...props}>
      <defs>
        <mask id="ipTTableFile0">
          <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth={4}>
            <path
              fill="#555"
              d="M42 6H6a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z"
            ></path>
            <path
              strokeLinecap="round"
              d="M4 18h40m-26.5 0v24m13-24v24M4 30h40m0-22v32a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8"
            ></path>
          </g>
        </mask>
      </defs>
      <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTTableFile0)"></path>
    </svg>
  );
}
