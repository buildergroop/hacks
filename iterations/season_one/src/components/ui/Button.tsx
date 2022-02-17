import React from "react";

interface ButtonProps {
  width: string;
  rounded?: "sm" | "md" | "lg" | "full";
  size?: "sm" | "md" | "lg" | "xl";
  color?: "light" | "dark";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  width,
  rounded,
  size = "sm",
  color = "light",
  className,
  children,
}) => {
  return (
    <button
      className={`
        grid place-items-center
        cursor-pointer
        hover:bg-opacity-80
        transition-all
        
        ${width}
        ${rounded === "sm" && "rounded-sm"}
        ${rounded === "md" && "rounded-md"}
        ${rounded === "lg" && "rounded-lg"}
        ${rounded === "full" && "rounded-full"}

        ${size === "sm" && "h-[2rem] px-2"}
        ${size === "md" && "h-[2.4rem] px-4"}
        ${size === "lg" && "h-[2.7rem] px-6"}
        ${size === "xl" && "h-[3rem] px-8"}

        ${color === "light" && "bg-light-main"}
        ${color === "dark" && "bg-dark-main"}

        ${className}
        `}
    >
      {children}
    </button>
  );
};