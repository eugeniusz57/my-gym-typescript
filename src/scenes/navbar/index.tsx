import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuTogled, setIsMenuTogled] = useState<boolean>(false);
  const flexBetwen = 'flex items-center justify-between';
  const isAboveMediumScreen = useMediaQuery('(min-width: 1024px)');
  const navbarBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow';
  return (
    <nav>
      <div
        className={`${flexBetwen} ${navbarBackground} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetwen} mx-auto w-5/6 `}>
          <div className={`${flexBetwen} w-full gap-16`}>
            {/* left side */}
            <img src={Logo} alt="logo" />
            {/* right side */}
            {isAboveMediumScreen ? (
              <div className={`${flexBetwen} w-full `}>
                <div className={`${flexBetwen} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetwen} gap-8`}>
                  <p>Sing In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2 hover:bg-primary-500"
                onClick={() => setIsMenuTogled(!isMenuTogled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {!isAboveMediumScreen && isMenuTogled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* Close icon */}
          <div className="flex justify-end p-8">
            <button onClick={() => setIsMenuTogled(!isMenuTogled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* menu items */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
