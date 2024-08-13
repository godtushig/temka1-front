import { tv } from "tailwind-variants";

export const title = tv({
  base: "tracking-tight inline font-medium",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl leading-9",
      lg: "text-4xl lg:text-6xl",
      main: "w-fit text-[34px] sm:text-[46px] md:text-[60px] lg:text-[96px] leading-[41px] md:leading-[115px] tracking-[-2px]",
      secondary: 'text-lg md:text-[53px] leading-lg md:leading-[56px] leading-[31px] tracking-[-2px]'
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full text-white font-light",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
    size: {
      main: "text-[10px] sm:text-[14px] md:text-[18px] lg:text-[26px] md:leading-8"
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});

export const headline = tv({
  base: "uppercase",
  variants: {
    size: {
      main: "text-[10px] sm:text-[14px] md:text-[18px] lg:text-[26px] font-light",
      secondary: 'font-semibold text-lg md:text-[53px] leading-lg md:leading-[56px] leading-[31px] md:tracking-[-2px] font-medium'
    },
  },
});
