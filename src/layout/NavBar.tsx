import { useModalContext } from '@/contex/modalContext';
import { Button } from '@/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { MoblieNav } from './MobileNav';

export default function NavBar() {
  const modalHook = useModalContext();
  const toggleModal = () => {
    if (modalHook) {
      modalHook.toggleModal();
    }
  };
  const [navOpen, setNavOpen] = useState(false);

  const onOpen = () => {
    setNavOpen(!navOpen);
  };

  const onClose = () => {
    setNavOpen(false);
  };

  return (
    <nav className="flex h-full w-full items-center justify-between bg-fv-100 px-4 py-4 font-rube md:px-6 lg:px-16">
      <Link href={'/'}>
        <Image src={'/assets/logo.svg'} alt="logo" width={150} height={33} />
      </Link>
      {/* Dropdown menu  */}
      <button role="menu" className="block cursor-pointer md:hidden" onClick={onOpen}>
        <i className={`ri-${navOpen ? 'close' : 'menu-3'}-line text-[25px] text-fv-200`}></i>
      </button>

      <div className="hidden items-center gap-14 md:flex">
        <ul className="flex items-center gap-14">
          <li>
            <Link
              href="#about"
              className="text-[1.13rem]/[1.4rem] font-normal text-fv-300 duration-300 hover:text-fv-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#how-it-works"
              className="text-[1.13rem]/[1.4rem] font-normal text-fv-300 duration-300 hover:text-fv-200"
            >
              How it Works
            </Link>
          </li>
        </ul>
        <Button variant="filled" onClick={toggleModal}>
          Join Waitlist
        </Button>
      </div>
      <MoblieNav open={navOpen} onClose={onClose} />
    </nav>
  );
}
