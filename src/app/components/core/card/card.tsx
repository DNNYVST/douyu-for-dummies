"use client";

import { ReactNode, LegacyRef } from "react";

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
  return (
    <div className="rounded-md p-4 h-[100%] shadow-lg bg-background-secondary text-text-primary relative">
      {title && (
        <p className="flex items-center mb-2" style={{ color: titleColor }}>
          {title}
          {button}
        </p>
      )}
      <div
        className="overflow-x-scroll motion-safe:scroll-smooth snap-x snap-mandatory hide-scrollbar"
        ref={contentRef}
      >
        {children}
      </div>
    </div>
  );
};
export default Card;
