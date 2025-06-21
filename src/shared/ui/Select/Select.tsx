'use client';

import { FC, useEffect, useRef, useState } from 'react';
import { cn } from '@/shared/lib/cn';
import { ChevronDown } from 'lucide-react';
import { Button } from '../Button';

interface IPropsSelect {
  paramName: string | null;
  className?: string;
  items: { label: string; value: string | number | null }[];
  selectedItem: { label: string; value: string | number | null } | null;
  // setSelectedItem: (v: unknown) => void;
  setSelectedItem: (paramName: string | null, value: string | number | null) => void;
  disabled?: boolean;
  placeholder: string;
}

export const Select: FC<IPropsSelect> = ({
  className,
  items,
  paramName,
  selectedItem,
  setSelectedItem,
  disabled = false,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const openDropdown = () => {
    if (!disabled) setIsOpen(true);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleCloseDropdown = (e: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(e.target as Node)) {
        closeDropdown();
      }
    };

    const handleCloseDropdownOnEsc = (e: KeyboardEvent) => {
      if (isOpen && e.key === 'Escape') {
        closeDropdown();
      }
    };

    if (isOpen) {
      document.addEventListener('mouseup', handleCloseDropdown);
      document.addEventListener('keyup', handleCloseDropdownOnEsc);
    }

    return () => {
      document.removeEventListener('mouseup', handleCloseDropdown);
      document.addEventListener('keyup', handleCloseDropdownOnEsc);
    };
  }, [isOpen]);

  return (
    <div className={cn(`w-full h-[34px]`, className)} ref={divRef}>
      <Button
        variant={'select'}
        disabled={disabled}
        className={cn(
          `py-0 px-3 w-full flex justify-between items-center relative h-full border-[#000000]`,
          !!selectedItem && isOpen ? 'text-[#000000]' : 'text-[#474A51]',
          isOpen ? 'border-b-[3px]' : 'border-b-[1px]'
        )}
        role="button"
        onClick={() => {
          if (!isOpen) {
            openDropdown();
          } else {
            closeDropdown();
          }
        }}
      >
        <span className={'truncate'}>{selectedItem?.label ?? placeholder}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        <ul
          className={cn(
            `absolute z-[10] left-0 top-[calc(100%+6px)] right-0  h-max max-h-[180px] text-[#000000]
            overflow-y-auto list-none bg-[#ffffff] flex flex-col shadow-[0px_2px_10px_0px_#0000001A]`,
            !isOpen && 'hidden'
          )}
        >
          {items.map((item, i) => (
            <li
              key={i}
              className={`w-full px-[10px] flex items-center h-[34px] pointer hover:bg-[#F2F2F2]`}
              role="button"
              onClick={() => setSelectedItem(paramName, item.value)}
              aria-label={item.label}
            >
              <span className={'truncate'}>{item.label}</span>
            </li>
          ))}
        </ul>
      </Button>
    </div>
  );
};
