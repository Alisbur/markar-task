import React, { ElementType, ReactNode } from 'react';
import { cn } from '@/shared/lib/cn';

interface IBoxEars extends React.ComponentProps<'div'> {
  children?: ReactNode;
  className?: string;
  component?: string;
}

const BoxEars = React.forwardRef<HTMLDivElement, IBoxEars>(
  ({ className, children, component = 'div', ...props }, ref) => {
    const Comp = component as ElementType;
    return (
      <Comp
        className={cn(
          'mx-[100px]  max-xl:mx-[60px] max-lg:mx-[40px] max-md:mx-[30px] max-sm:mx-[16px]',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
BoxEars.displayName = 'BoxEars';

export { BoxEars };
