import * as React from "react";
import { ImSpinner2 } from "react-icons/im";

import clsxm from "@/lib/clsxm";

enum ButtonVariant {
  "primary",
  "secondary",
}

type ButtonProps = {
  isLoading?: boolean;
  isDarkBg?: boolean;
  variant?: keyof typeof ButtonVariant;
  width: string;
} & React.ComponentPropsWithRef<"button">;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      width,
      disabled: buttonDisabled,
      isLoading,
      variant = "primary",
      isDarkBg = false,
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <div className="group absolute transition-all">
        <div
          className={`${width} candy-border -mb-[calc(3rem+6px)] ml-[6px] h-[3rem] transition-all group-hover:-mb-[3rem] group-hover:ml-0`}
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
            [
              variant === "primary" && [
                "candy-bg text-white",
                // "border-primary-600 border",
                // "hover:bg-primary-600 hover:text-white",
                // "active:bg-primary-500",
                // "disabled:bg-primary-400 disabled:hover:bg-primary-400",
              ],
            ],
            //#endregion  //*======== Variants ===========
            "disabled:cursor-not-allowed",
            isLoading &&
              "relative text-transparent transition-none hover:text-transparent disabled:cursor-wait",
            className
          )}
          {...rest}
        >
          {isLoading && (
            <div
              className={clsxm(
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                {
                  "text-white": ["primary", "dark"].includes(variant),
                  "text-black": ["light"].includes(variant),
                  "text-primary-500": ["outline", "ghost"].includes(variant),
                }
              )}
            >
              <ImSpinner2 className="animate-spin" />
            </div>
          )}
          {children}
        </button>
      </div>
    );
  }
);

export default Button;
