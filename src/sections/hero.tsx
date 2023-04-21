import { useModalContext } from '@/contex/modalContext';
import { Button } from '@/ui/Button';
import Image from 'next/image';

export default function Hero() {
  const modalHook = useModalContext();
  const toggleModal = () => {
    if (modalHook) {
      modalHook.toggleModal();
    }
  };
  return (
    <>
      <section className="flex h-full w-full flex-col items-center gap-10 bg-fv-100 px-2 pb-[100px] pt-[60px] font-rube md:px-6 md:pb-[200px] md:pt-[100px] lg:flex-row lg:items-start lg:px-[108px]">
        <div className="flex w-full max-w-[646px] flex-col items-center lg:items-start">
          <hgroup className="mb-16 flex flex-col items-center gap-6 text-center font-normal text-fv-300 lg:items-start lg:text-left">
            <h1 className="text-[40px]/[44px] md:text-[70px]/[77px]">
              Inclusive Real Estate Investing <span className="italic text-fv-200">For All</span>
            </h1>
            <p className="max-w-[568px] text-[14px]/[21px] font-light md:text-[22px]/[33px]">
              Unlock the potential of real estate investment, regardless of your budget, and embark on a journey toward
              financial freedom.
            </p>
          </hgroup>

          <Button variant="outlined" onClick={toggleModal}>
            Join Waitlist
          </Button>
        </div>
        <div className="md::max-w-[606px] h-full w-full">
          <Image
            src="/assets/live-demo.png"
            alt="fraqvest"
            width={606}
            height={653}
            className="hidden md:block"
            priority
          />
          <Image
            src="/assets/live-demo-mobile.png"
            alt="fraqvest"
            width={333}
            height={402}
            className="block md:hidden"
            priority
          />
        </div>
      </section>
    </>
  );
}
