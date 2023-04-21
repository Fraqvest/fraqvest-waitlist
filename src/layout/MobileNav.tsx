import { useModalContext } from '@/contex/modalContext';
import { Button } from '@/ui/Button';
import Link from 'next/link';

type MobileNavProps = {
  open: Boolean;
  onClose: () => void;
};

export const MoblieNav = ({ open, onClose }: MobileNavProps) => {
  const modalHook = useModalContext();
  const toggleModal = () => {
    if (modalHook) {
      onClose();
      modalHook.toggleModal();
    }
  };
  return (
    <div
      className={`absolute top-0 mt-20 h-full bg-fv-100 py-6 duration-300 md:hidden lg:hidden ${
        open ? 'w-full translate-x-0' : '-translate-x-[400px]'
      }`}
    >
      <div className="flex w-full flex-col items-start gap-14 px-2">
        <ul className="flex flex-col items-start gap-14">
          <li onClick={onClose}>
            <Link href="#about" className="text-[1.13rem]/[1.4rem] font-normal text-fv-300">
              About
            </Link>
          </li>
          <li onClick={onClose}>
            <Link href="#how-it-works" className="text-[1.13rem]/[1.4rem] font-normal text-fv-300">
              How it Works
            </Link>
          </li>
        </ul>
        <Button variant="filled" onClick={toggleModal}>
          Join Waitlist
        </Button>
      </div>
    </div>
  );
};
