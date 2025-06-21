import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/cn';

// Варианты стилей кнопки
const buttonVariants = cva(
  `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md
  text-base  font-medium ring-offset-background transition-colors focus-visible:outline-none
  focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
  disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none
  [&_svg]:shrink-0 hover:cursor-pointer`,
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline h-reset px-0 py-0',
        rounded: 'rounded-full bg-primary border-input hover:bg-primary/90 text-primary ',
        select: 'bg-[#FFFFFF]',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-fit px-4 py-1 text-base',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
        full: 'w-full h-auto',
        reset: 'px-0 py-0',
      },
      addon: {
        default: 'font-normal',
        bold: 'font-bold',
        uppercase: 'uppercase',
      },
      textSize: {
        default: 'text-base',
        xs: 'text-xs',
        sm: 'text-sm',
        lg: 'text-lg',
      },
      textColor: {
        default: '',
        black: 'text-black',
        gray: 'text-gray-500',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      addon: 'default',
      textSize: 'default',
      textColor: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      addon,
      textSize,
      textColor,
      asChild = false,
      isLoading = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(
          'relative flex items-center justify-center',
          buttonVariants({ variant, size, addon, textColor, textSize }),
          className
        )}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {children}
        {isLoading && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
            <svg className="animate-spin w-5 h-5 text-inherit" viewBox="0 0 24 24" fill="none">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          </span>
        )}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
