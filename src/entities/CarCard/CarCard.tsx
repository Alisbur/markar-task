'use client';
import { FC, HTMLAttributes, useState, type MouseEvent } from 'react';
import Image from 'next/image';
import { cn } from '@/shared/lib/utils';
import { HeartIcon } from 'lucide-react';
import { Button } from '@/shared/ui/Button';

type IPropsCarCard = {
  carData: TCarModel;
  className?: string;
  isLiked?: boolean;
  onLikeClick?: (e: MouseEvent, id: number) => void;
  onCardClick: (id: number) => void;
  // actionSlot
} & HTMLAttributes<HTMLDivElement>;

export const CarCard: FC<IPropsCarCard> = ({
  carData: car,
  className,
  onCardClick,
  onLikeClick,
  ...props
}) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <article
      className={cn(
        `w-full flex flex-col gap-4 pb-2 border border-secondary shadow-md overflow-hidden
        rounded-sm relative cursor-pointer duration-300 transition-all hover:scale-[1.05]`,
        className
      )}
      role="button"
      onClick={(e) => onCardClick(car.id)}
      {...props}
    >
      {car.imagesNumber && (
        <img
          src={car.images[0]}
          width={500}
          height={500}
          className={`w-full object-cover`}
          alt={`${car.brand} ${car.model}`}
        />
      )}
      <div className={`flex flex-col p-2 gap-1`}>
        <h3 className={`text-m text-primary font-semibold`}>{car.brand}</h3>
        <p className={`text-m secondary`}>{car.model}</p>
        <p className={`text-l secondary font-semibold`}>{car.year}</p>
        <p className={`text-xl font-semibold`}>{`${car.price.toLocaleString()} р.`}</p>
      </div>
      <div className={'w-full mt-auto px-2 flex items-center justify-between'}>
        <Button
          variant={'outline'}
          onClick={() => {
            setIsLiked(!isLiked);
          }}
        >
          <HeartIcon fill={isLiked ? 'red' : 'transparent'} color={'red'} />
        </Button>
        <Button variant={'outline'}>Подробнее</Button>
      </div>
    </article>
  );
};
