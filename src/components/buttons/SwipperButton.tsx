import * as React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { useSwiper } from 'swiper/react';

import clsxm from '@/lib/clsxm';

enum ButtonVariant {
  'red',
  'yellow',
  'green',
}

enum ButtonSize {
  'small',
  'base',
  'large',
}

enum ButtonDirection {
  'prev',
  'next',
}

type SwiperButtonProps = {
  variant?: keyof typeof ButtonVariant;
  size?: keyof typeof ButtonSize;
  direction: keyof typeof ButtonDirection;
  iconClassName?: string;
} & React.ComponentPropsWithRef<'button'>;

const SwiperButton = React.forwardRef<HTMLButtonElement, SwiperButtonProps>(
  (
    {
      className,
      variant = 'yellow',
      size = 'base',
      direction,
      iconClassName,
      ...rest
    },
    ref
  ) => {
    const swiper = useSwiper();
    return (
      <>
        {direction === 'prev' && (
          <button
            ref={ref}
            type='button'
            className={clsxm(
              'flex justify-center items-center rounded-full',
              //#region  //*=========== Size ===========
              [
                size === 'large' && [
                  'min-h-[44px] min-w-[44px] md:min-h-[48px] md:min-w-[48px]',
                ],
                size === 'base' && [
                  'min-h-[36px] min-w-[36px] md:min-h-[40px] md:min-w-[40px]',
                ],
                size === 'small' && [
                  'min-h-[32px] min-w-[32px] md:min-h-[36px] md:min-w-[36px]',
                ],
              ],
              //#endregion  //*======== Size ===========
              //#region  //*=========== Variant ===========
              [
                variant === 'red' && [
                  'bg-critical-100',
                  'hover:bg-critical-200',
                  'active:bg-critical-300',
                ],
                variant === 'yellow' && [
                  'bg-warning-100',
                  'hover:bg-warning-200',
                  'active:bg-warning-300',
                ],
                variant === 'green' && [
                  'bg-success-100',
                  'hover:bg-success-200',
                  'active:bg-success-300',
                ],
              ],
              //#endregion  //*======== Variant ===========
              className
            )}
            {...rest}
          >
            <BsArrowLeftShort
              className={clsxm(
                //#region  //*=========== Size ===========
                [
                  size === 'large' && [
                    'min-h-[40px] min-w-[40px] md:min-h-[36px] md:min-w-[36px]',
                  ],
                  size === 'base' && [
                    'min-h-[24px] min-w-[24px] md:min-h-[28px] md:min-w-[28px]',
                  ],
                  size === 'small' && [
                    'min-h-[20px] min-w-[20px] md:min-h-[24px] md:min-w-[24px]',
                  ],
                ],
                //#endregion  //*======== Size ===========
                //#region  //*=========== Variant ===========
                [
                  variant === 'red' && ['fill-critical-800'],
                  variant === 'yellow' && ['fill-warning-800'],
                  variant === 'green' && ['fill-success-800'],
                ],
                //#endregion  //*======== Variant ===========
                iconClassName
              )}
              onClick={() => swiper.slidePrev()}
            />
          </button>
        )}

        {direction === 'next' && (
          <button
            ref={ref}
            type='button'
            className={clsxm(
              'flex justify-center items-center rounded-full',
              //#region  //*=========== Size ===========
              [
                size === 'large' && [
                  'min-h-[44px] min-w-[44px] md:min-h-[48px] md:min-w-[48px]',
                ],
                size === 'base' && [
                  'min-h-[36px] min-w-[36px] md:min-h-[40px] md:min-w-[40px]',
                ],
                size === 'small' && [
                  'min-h-[32px] min-w-[32px] md:min-h-[36px] md:min-w-[36px]',
                ],
              ],
              //#endregion  //*======== Size ===========
              //#region  //*=========== Variant ===========
              [
                variant === 'red' && [
                  'bg-critical-100',
                  'hover:bg-critical-200',
                  'active:bg-critical-300',
                ],
                variant === 'yellow' && [
                  'bg-warning-100',
                  'hover:bg-warning-200',
                  'active:bg-warning-300',
                ],
                variant === 'green' && [
                  'bg-success-100',
                  'hover:bg-success-200',
                  'active:bg-success-300',
                ],
              ],
              //#endregion  //*======== Variant ===========
              className
            )}
            {...rest}
          >
            <BsArrowRightShort
              className={clsxm(
                //#region  //*=========== Size ===========
                [
                  size === 'large' && [
                    'min-h-[40px] min-w-[40px] md:min-h-[36px] md:min-w-[36px]',
                  ],
                  size === 'base' && [
                    'min-h-[24px] min-w-[24px] md:min-h-[28px] md:min-w-[28px]',
                  ],
                  size === 'small' && [
                    'min-h-[20px] min-w-[20px] md:min-h-[24px] md:min-w-[24px]',
                  ],
                ],
                //#endregion  //*======== Size ===========
                //#region  //*=========== Variant ===========
                [
                  variant === 'red' && ['fill-critical-800'],
                  variant === 'yellow' && ['fill-warning-800'],
                  variant === 'green' && ['fill-success-800'],
                ],
                //#endregion  //*======== Variant ===========
                iconClassName
              )}
              onClick={() => swiper.slideNext()}
            />
          </button>
        )}
      </>
    );
  }
);

export default SwiperButton;
