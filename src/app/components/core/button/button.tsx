import { ComponentPropsWithoutRef } from "react";

type ButtonVariants =
  | "primary"
  | "secondary"
  | "destructive"
  | "icon"
  | undefined;

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  className?: string;
  variant?: ButtonVariants;
}

const VARIANTS = {
  primary:
    "bg-button-primary text-text-base hover:enabled:bg-button-primary/80",
  secondary:
    "bg-inherit text-text-primary border hover:enabled:border-button-primary/80 hover:enabled:text-button-primary/80",
  destructive:
    "bg-button-destructive text-text-primary hover:enabled:bg-button-destructive/80",
  icon: "bg-inherit text-text-primary",
};

const Button = ({
  children,
  className = "",
  variant = "primary",
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`w-min h-min text-sm font-semibold rounded-sm py-1 px-2 disabled:opacity-40 disabled:italic disabled:cursor-not-allowed ${VARIANTS[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
