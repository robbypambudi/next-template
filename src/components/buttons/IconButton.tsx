import * as React from 'react';
import { IconType } from 'react-icons';

import clsxm from '@/lib/clsxm';

enum ButtonVariant {
  'red',
  'yellow',
  'green',
  'discolored',
}
enum ButtonSize {
  'small',
  'base',
  'large',
}

type IconButtonProps = {
  variant?: keyof typeof ButtonVariant;
  size?: keyof typeof ButtonSize;
  icon?: IconType;
  iconClassName?: string;
} & React.ComponentPropsWithRef<'button'>;

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      icon: Icon,
      variant = 'outline',
      disabled: buttonDisabled,
      iconClassName,
      size = 'base',
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type='button'
        disabled={buttonDisabled}
        className={clsxm(
          'button inline-flex items-center justify-center font-semibold',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
          'transition duration-100',
          'min-h-[28px] min-w-[28px] rounded-lg p-1 md:min-h-[34px] md:min-w-[34px] md:p-2',

          //#region  //*=========== Size ===========
          [
            size === 'large' && [
              'min-h-[44px] min-w-[44px] p-2.5 md:min-h-[48px] md:min-w-[48px] md:p-3',
            ],
            size === 'base' && [
              'min-h-[36px] min-w-[36px] p-1.5 md:min-h-[40px] md:min-w-[40px] md:p-2',
            ],
            size === 'small' && [
              'min-h-[32px] min-w-[32px] p-1 md:min-h-[36px] md:min-w-[36px] md:p-1.5',
            ],
          ],
          //#endregion  //*======== Size ===========
          //#region  //*=========== Variant ===========
          [
            variant === 'red' && [
              'bg-critical-600 text-white',
              'hover:bg-critical-700',
              'active:bg-critical-800',
              'disabled:bg-critical-700 disabled:brightness-90 disabled:hover:bg-critical-700',
            ],
            variant === 'yellow' && [
              'bg-warning-600',
              'hover:bg-warning-700',
              'active:bg-warning-800',
              'disabled:bg-warning-700 disabled:brightness-90 disabled:hover:bg-warning-700',
            ],
            variant === 'green' && [
              'bg-success-600',
              'hover:bg-success-700',
              'active:bg-success-800',
              'disabled:bg-success-700 disabled:brightness-90 disabled:hover:bg-success-700',
            ],
            variant === 'discolored' && [
              'bg-tainted-200 text-discolored-1000',
              'hover:bg-tainted-600',
              'active:bg-tainted-700',
              'disabled:bg-tainted-600 disabled:brightness-90 disabled:hover:bg-tainted-700',
            ],
          ],
          //#endregion  //*======== Variant ===========
          'disabled:cursor-not-allowed',
          className
        )}
        {...rest}
      >
        {Icon && (
          <Icon
            className={clsxm(
              'w-5.5 h-5.5 md:w-6 md:h-6 text-white',
              iconClassName
            )}
          />
        )}
      </button>
    );
  }
);

export default IconButton;
