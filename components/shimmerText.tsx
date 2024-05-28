import { CSSProperties, FC, ReactNode } from "react";

interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 30,
}) => {
  return (
    <p
      style={
        {
          "--shimmer-width": `${shimmerWidth}%`,
        } as CSSProperties
      }
      className={classNames(
        "mx-auto text-neutral-100/50",

        // Shimmer effect
        "animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",

        // Shimmer gradient
        "bg-gradient-to-r from-transparent via-white/80 via-50% to-transparent",

        className ? className : "",
      )}
    >
      {children}
    </p>
  );
};

export default AnimatedShinyText;
