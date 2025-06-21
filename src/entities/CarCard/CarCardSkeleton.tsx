import { FC, HTMLAttributes } from 'react';
import { cn } from '@/shared/lib/utils';

export const CarCardSkeleton: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return (
    <article
      className={cn(
        `w-full flex flex-col gap-[15px] pb-2 border border-secondary shadow-md overflow-hidden
        rounded-sm relative animate-pulse`,
        className
      )}
      {...props}
    >
      <div className={`h-[200px] w-full bg-[#d4d4d8]`} />
      <div className={`flex flex-col p-4 gap-1 rounded-full`}>
        <span className={`h-4 w-[40%] bg-[#d4d4d8] rounded-full`} />
        <span className={`h-3 w-[80%] bg-[#d4d4d8] rounded-full`} />
        <span className={`h-4 w-[60%] bg-[#d4d4d8] rounded-full`} />
        <span className={`h-3 w-[50%] bg-[#d4d4d8] rounded-full`} />
        <div className={'w-full mt-4 flex items-center justify-between'}>
          <span className={`h-[40px] w-[60px] bg-[#d4d4d8] rounded-sm`} />
          <span className={`h-[40px] w-[50%] bg-[#d4d4d8] rounded-sm`} />
        </div>
      </div>
    </article>
  );
};
