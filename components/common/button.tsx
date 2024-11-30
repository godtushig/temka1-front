import {
  Button as NextUIButton,
  ButtonProps as NextUIButtonProps,
} from "@nextui-org/button";
import { cn } from "@nextui-org/theme";

import IconRightArrow from "../icons/right-arrow";

export interface ButtonProps extends NextUIButtonProps {
  underlined?: boolean;
  withRightIcon?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  underlined,
  withRightIcon,
  ...props
}) => {
  return (
    <NextUIButton
      {...props}
      className={cn(
        `text-xs md:text-xl border text-white border-main-2 rounded-full uppercase h-8 md:h-12 hover:bg-main-2 ${props.endContent ? "px-7" : ""} 
        ${underlined ? "overflow-visible bg-transparent relative font-light border-none text-white text-[26px] dark:hover:bg-transparent hover:bg-transparent hover:text-main-2 after:absolute after:bg-white after:hover:bg-main-2 after:bottom-1.5 after:left-0 after:h-[1px] after:w-[115%]" : ""}`,
        className
      )}
      variant="ghost"
      endContent={withRightIcon ? <IconRightArrow /> : null}
    >
      {children}
    </NextUIButton>
  );
};

export default Button;
