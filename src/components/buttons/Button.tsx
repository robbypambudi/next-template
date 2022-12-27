import * as React from "react";
import { IconType } from "react-icons";
import { ImSpinner2 } from "react-icons/im";

import clsxm from "@/lib/clsxm";

enum ButtonVariant {
  "primary",
  "outline",
  "danger",
  "ghost",
}
enum ButtonSize {
  "sm",
  "base",
}

type ButtonProps = {
  isLoading?: boolean;
  size?: keyof typeof ButtonSize;
  variant?: keyof typeof ButtonVariant;
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
} & React.ComponentPropsWithRef<"button">;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      size = "base",
      variant = "primary",
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      leftIconClassName,
      rightIconClassName,
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={clsxm(
          "button inline-flex items-center justify-center rounded-lg",
          "focus:outline-none focus-visible:ring focus-visible:ring-primary-500",
          "transition-colors duration-75",
          //#region  //*=========== Size ===========
          [
            size === "base" && [
              "min-h-[34px] py-1.5 px-2.5 font-bold md:min-h-[42px] md:py-2 md:px-3",
              "text-sm md:text-base",
            ],
            size === "sm" && [
              "min-h-[30px] py-1 px-1.5 font-semibold md:min-h-[34px] md:py-1.5 md:px-2",
              "text-xs md:text-sm",
            ],
          ],
          //#endregion  //*======== Size ===========
          //#region  //*=========== Variants ===========
          [
            variant === "primary" && [
              "bg-primary-400 text-white",
              "hover:bg-primary-600",
              "active:bg-primary-700",
              "shadow-p-100 hover:shadow-p-200 disabled:hover:shadow-p-100",
              "disabled:bg-primary-700 disabled:brightness-90 disabled:hover:bg-primary-700",
            ],
            variant === "outline" && [
              "text-typo-secondary",
              "border border-typo-outline",
              "hover:bg-secondary-200 active:bg-secondary-400",
              "disabled:bg-secondary-300 disabled:brightness-95",
            ],
            variant === "danger" && [
              "bg-danger-400 text-white",
              "shadow-d-100 hover:shadow-d-200 disabled:hover:shadow-d-100",
              "hover:bg-danger-600 active:bg-danger-700",
              "disabled:bg-danger-700 disabled:brightness-95",
            ],
            variant === "ghost" && [
              "bg-clear text-typo-secondary",
              "hover:bg-secondary-200",
              "active:bg-secondary-400 disabled:bg-secondary-400 disabled:brightness-95",
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
              [
                ["primary", "danger"].includes(variant) && "text-white",
                ["outline", "ghost"].includes(variant) && "text-gray-500",
              ]
            )}
          >
            <ImSpinner2 className="animate-spin" />
          </div>
        )}
        {/* Left Icon */}
        {LeftIcon && (
          <div className="mr-1">
            <LeftIcon
              className={clsxm(
                [
                  size === "base" && "text-lg md:text-xl",
                  size === "sm" && "text-sm md:text-lg",
                ],
                leftIconClassName
              )}
            />
          </div>
        )}
        {children}
        {RightIcon && (
          <div className="ml-1">
            <RightIcon
              className={clsxm(
                [
                  size === "base" && "text-lg md:text-xl",
                  size === "sm" && "text-sm md:text-lg",
                ],
                [
                  variant === "primary" && "text-primary-100",
                  variant === "danger" && "text-danger-100",
                  ["outline", "ghost"].includes(variant) && "text-typo-icons",
                ],
                rightIconClassName
              )}
            />
          </div>
        )}
      </button>
    );
  }
);

export default Button;
