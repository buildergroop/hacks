import * as React from "react";

import clsxm from "@/lib/clsxm";

enum ButtonVariant {
  "primary",
  "secondary",
}

type ButtonProps = {
  variant?: keyof typeof ButtonVariant;
  width: string;
  outerClassName?: string;
} & React.ComponentPropsWithRef<"button">;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      width,
      disabled,
      outerClassName,
      variant = "primary",
      ...rest
    },
    ref
  ) => {
    return (
      <div
        className={`group absolute select-none transition-all ${outerClassName}`}
      >
        <div
          className={clsxm(
            `${width} -mb-[calc(3rem+6px)] ml-[6px] h-[3rem] border`,
            "transition-all group-hover:-mb-[3rem] group-hover:ml-0",
            [variant === "primary" && ["candy-border"]],
            [variant === "secondary" && ["border-white"]]
          )}
        />

        <button
          ref={ref}
          type="button"
          disabled={disabled}
          className={clsxm(
            `grid h-[3rem] place-items-center ${width} z-[999]`,
            "focus-visible:ring-primary-500 focus:outline-none focus-visible:ring",
            "font-krona text-[0.9rem]",
            "shadow-sm",
            "transition-colors duration-75",

            //#region  //*=========== Variants ===========
            [variant === "primary" && ["candy-bg text-white"]],
            [variant === "secondary" && ["bg-white text-dark"]],
            // #endregion  //*======== Variants ===========

            "disabled:cursor-not-allowed",
            className
          )}
          {...rest}
        >
          {children}
        </button>
      </div>
    );
  }
);

export default Button;
