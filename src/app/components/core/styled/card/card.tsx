"use client";

import { ReactNode, LegacyRef } from "react";
import { useTheme } from "../../../../theme-provider";

//   @media (prefers-reduced-motion) {
//     scroll-behavior: auto;
//   }
//   -ms-overflow-style: none;
//   scrollbar-width: none;
//   -webkit-scrollbar {
//     display: none;
//   }

const Card = ({
  title = "",
  titleColor = "",
  children,
  button = null,
  contentRef,
}: {
  title?: string;
  titleColor?: string;
  children: ReactNode;
  button?: ReactNode;
  contentRef?: LegacyRef<HTMLDivElement>;
}) => {
  const {
    colorScheme: { background, color },
  } = useTheme();
  return (
    <div
      className={`rounded-md p-4 h-[100%] shadow-lg ${background} ${color} relative`}
    >
      {title && (
        <p className="flex items-center mb-2" style={{ color: titleColor }}>
          {title}
          {button}
        </p>
      )}
      <div
        className="overflow-x-scroll scroll-smooth snap-x snap-mandatory"
        ref={contentRef}
      >
        {children}
      </div>
    </div>
  );
};
export default Card;
