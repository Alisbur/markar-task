'use client';
import React, { FC, ReactNode, useMemo } from 'react';
import { Header } from '#widgets/Sections/Header';
import { Footer } from '#widgets/Sections/Footer';
import { BoxEars } from '#/shared/ui/BoxEars';
import { LayoutMain } from '#/layouts/LayoutMain';
import { ProfileSideBar } from '#/widgets/Sections/ProfileSideBar';
import { usePathname } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { BonusBlock } from '#/widgets/Bonus';
import Link from 'next/link';

interface IProfileLayoutProps {
  children?: ReactNode;
}

export const ProfileLayout: FC<IProfileLayoutProps> = ({ children }) => {
  const path = usePathname();

  const isMainPage = useMemo(() => path === '/profile', [path]);
  const isNotShow = useMemo(
    () => path.startsWith('/profile/orders') || path.startsWith('/profile/bonus'),
    [path]
  );

  return (
    <>
      <Header />
      <main className={'my-[30px]'}>
        <LayoutMain>
          <BoxEars>
            <div className={` ${isMainPage ? 'flex flex-col xl:flex-row' : 'grid lg:flex'}`}>
              <div className={`flex w-full lg:w-auto ${isMainPage ?? 'w-full'}  items-start`}>
                <ProfileSideBar
                  firstName="Наталья"
                  lastName="Слепцова"
                  className={
                    !isMainPage && !isNotShow
                      ? 'hidden xl:inline-grid'
                      : isMainPage
                        ? ''
                        : 'hidden xl:inline-grid'
                  }
                />

                {isMainPage && <BonusBlock className={'hidden w-full lg:grid xl:hidden'} />}
              </div>

              <div className={'w-full'}>
                <Link
                  href={'/profile'}
                  className={`flex gap-2 items-center text-sm text-black mb-6 hover:underline uppercase ${isMainPage ? 'hidden' : 'flex xl:hidden'}`}
                >
                  <ArrowLeft strokeWidth={1} />
                  ВЕРНУТЬСЯ в лк
                </Link>
                {children}
              </div>
            </div>
          </BoxEars>
        </LayoutMain>
      </main>
      <Footer />
    </>
  );
};
