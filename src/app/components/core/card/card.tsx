"use client";

import { ReactNode, forwardRef } from "react";

interface CardProps {
  title?: string;
  titleColor?: string;
  button?: ReactNode;
  children: ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { title = "", titleColor = "", button = null, children }: CardProps,
    ref
  ) => {
    return (
      <div className="rounded-md p-4 h-[100%] shadow-md bg-background-primary border border-text-primary/40 text-text-primary relative">
        {title && (
          <p className="flex items-center mb-2" style={{ color: titleColor }}>
            {title}
            {button}
          </p>
        )}
        <div
          className="overflow-x-scroll motion-safe:scroll-smooth snap-x snap-mandatory hide-scrollbar"
          ref={ref}
        >
          {children}
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
