import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

const IconRightArrow = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      {...props}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="60.354"
      height="21.314"
      viewBox="0 0 60.354 21.314"
    >
      <g id="Group_1" data-name="Group 1" transform="translate(-410 -867.343)">
        <line
          id="Line_1"
          data-name="Line 1"
          x2="15"
          transform="translate(459.393 867.697) rotate(45)"
          fill="none"
          stroke="#fff"
          strokeWidth="1"
        />
        <line
          id="Line_3"
          data-name="Line 3"
          x2="59.287"
          transform="translate(410 878)"
          fill="none"
          stroke="#fff"
          strokeWidth="1"
        />
        <path
          id="Path_1"
          data-name="Path 1"
          d="M0,15V0"
          transform="translate(470 877.697) rotate(45)"
          fill="none"
          stroke="#fff"
          strokeWidth="1"
        />
      </g>
    </svg>
  )
);

IconRightArrow.displayName = 'IconRightArrow';
export default IconRightArrow;
