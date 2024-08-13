import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

const IconRedDot = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      {...props}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 15 15"
    >
      <circle
        id="Ellipse_20"
        data-name="Ellipse 20"
        cx="7.5"
        cy="7.5"
        r="7.5"
        fill="#d40c16"
      />
    </svg>
  )
);

IconRedDot.displayName = 'IconRedDot';
export default IconRedDot;
