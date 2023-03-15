import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';
import Link from './Link';
// import { SelectedPage } from '@/shared/types';
// import useMediaQuery from '@/hooks/useMediaQuery';
// import ActionButton from '@/shared/ActionButton';

type Props = {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetwen = 'flex items-center justify-between';
  return (
    <nav>
      <div className={`${flexBetwen} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetwen} mx-auto w-5/6 `}>
          <div className={`${flexBetwen} w-full gap-16`}>
            {/* left side */}
            <img src={Logo} alt="logo" />
            {/* right side */}
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
                <p>Become a Member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
