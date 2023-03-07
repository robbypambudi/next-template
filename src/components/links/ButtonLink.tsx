import * as React from 'react';
import { IconType } from 'react-icons';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';
import clsxm from '@/lib/clsxm';

enum ButtonSize {
  'small',
  'base',
  'large',
}

enum ButtonVariant {
  'red',
  'yellow',
  'green',
  'black',
  'discolored',
}

type ButtonLinkProps = {
  size?: keyof typeof ButtonSize;
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
  variant?: keyof typeof ButtonVariant;
} & UnstyledLinkProps;

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      children,
      className,
      variant = 'red',
      size = 'base',
      leftIconClassName,
      rightIconClassName,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      ...rest
    },
    ref
  ) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          'button inline-flex items-center justify-center rounded-md md:rounded-lg',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
          'transition-colors duration-75',
          //#region  //*=========== Size ===========
          [
            size === 'large' && [
              'min-h-[34px] py-2 px-[18px] font-semibold md:min-h-[38px] md:py-2.5 md:px-6',
              'text-type-secondary md:text-lg',
            ],
            size === 'base' && [
              'min-h-[30px] py-1.5 px-[14px] font-semibold md:min-h-[34px] md:py-2 md:px-5',
              'text-sm md:text-type-secondary',
            ],
            size === 'small' && [
              'min-h-[26px] py-0.5 px-[10px] font-medium md:min-h-[30px] md:py-1.5 md:px-4',
              'text-xs md:text-sm',
            ],
          ],
          //#endregion  //*======== Size ===========
          //#region  //*=========== Variants ===========
          [
            variant === 'red' && [
              'bg-critical-600 text-white',
              'hover:bg-critical-700',
              'active:bg-critical-800',
              'disabled:bg-critical-700 disabled:brightness-90 disabled:hover:bg-critical-700',
            ],
            variant === 'yellow' && [
              'bg-warning-600 text-white',
              'hover:bg-warning-700',
              'active:bg-warning-800',
              'disabled:bg-warning-700 disabled:brightness-90 disabled:hover:bg-warning-700',
            ],
            variant === 'green' && [
              'bg-success-600 text-white',
              'hover:bg-success-700',
              'active:bg-success-800',
              'disabled:bg-success-700 disabled:brightness-90 disabled:hover:bg-success-700',
            ],
            variant === 'black' && [
              'bg-black text-white',
              'hover:bg-gray-800',
              'active:bg-gray-900',
              'disabled:bg-gray-800 disabled:brightness-90 disabled:hover:bg-gray-800',
            ],
            variant === 'discolored' && [
              'bg-tainted-200 text-discolored-1000',
              'hover:bg-tainted-600',
              'active:bg-tainted-700',
              'disabled:bg-tainted-600 disabled:brightness-90 disabled:hover:bg-tainted-700',
            ],
          ],
          //#endregion  //*======== Variants ===========
          className
        )}
      >
        {/* Left Icon */}
        {LeftIcon && (
          <div className='mr-1'>
            <LeftIcon
              className={clsxm(
                [
                  size === 'large' && 'text-xl md:text-2xl',
                  size === 'base' && 'text-lg md:text-xl',
                  size === 'small' && 'text-sm md:text-lg',
                  variant === 'discolored' && 'text-discolored-1000',
                ],
                'text-white',
                leftIconClassName
              )}
            />
          </div>
        )}
        {children}
        {RightIcon && (
          <div className='ml-1'>
            <RightIcon
              className={clsxm(
                [
                  size === 'large' && 'text-xl md:text-2xl',
                  size === 'base' && 'text-lg md:text-xl',
                  size === 'small' && 'text-sm md:text-lg',
                  variant === 'discolored' && 'text-discolored-1000',
                ],
                'text-white',
                rightIconClassName
              )}
            />
          </div>
        )}
      </UnstyledLink>
    );
  }
);

export default ButtonLink;
