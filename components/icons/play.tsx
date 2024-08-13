import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

const IconPlay = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      {...props}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="55"
      height="55"
      viewBox="0 0 55 55"
    >
      <g id="Group_41" data-name="Group 41" transform="translate(-533 -4113)">
        <g
          id="Ellipse_24"
          data-name="Ellipse 24"
          transform="translate(533 4113)"
          fill="none"
          stroke="#fff"
          strokeWidth="1"
        >
          <circle cx="27.5" cy="27.5" r="27.5" stroke="none" />
          <circle cx="27.5" cy="27.5" r="27" fill="none" />
        </g>
        <path
          id="Polygon_1"
          data-name="Polygon 1"
          d="M13,0,26,22H0Z"
          transform="translate(575 4128) rotate(90)"
          fill="#fff"
        />
      </g>
    </svg>
  )
);

IconPlay.displayName = 'IconPlay';
export default IconPlay;
