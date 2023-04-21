import { useModalContext } from '@/contex/modalContext';
import { Button } from '@/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const modalHook = useModalContext();
  const toggleModal = () => {
    if (modalHook) {
      modalHook.toggleModal();
    }
  };
  return (
    <>
      <footer className="flex h-full w-full flex-col items-center justify-center gap-[50px] bg-fv-500 px-4 py-[100px] lg:px-[180px]">
        {/* join now */}
        <div className="mxa-w-[1142px] -mt-[300px] flex h-full max-h-[442px] w-full flex-col items-center justify-center gap-8 rounded-t-[20px] bg-fv-500 bg-join-pattern bg-cover bg-no-repeat px-5 py-[100px] text-center">
          <h2 className="max-w-[479px] font-rube text-[34px]/[44px] font-normal capitalize text-fv-300 md:text-[64px]/[83px]">
            Start growing your <span className="italic text-fv-200">portfolio</span>
          </h2>

          <Button variant="filled" onClick={toggleModal}>
            Join Now
          </Button>
        </div>
        {/* end of join now */}

        <Link href={'/'} className="mt-10">
          <Image src={'/assets/logo_light.svg'} alt="logo" width={180} height={40} />
        </Link>

        <ul className="flex flex-row items-start gap-4">
          <li>
            <Link
              href="https://twitter.com/fraqvest"
              className="text-[28px] text-fv-200 hover:text-opacity-75"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-twitter-fill" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.facebook.com/fraqvest"
              className="text-[28px] text-fv-200 hover:text-opacity-75"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-facebook-box-fill" />
            </Link>
          </li>

          <li>
            <Link
              href="https://www.instagram.com/fraqvest/"
              className="text-[28px] text-fv-200 hover:text-opacity-75"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-instagram-fill" />
            </Link>
          </li>
          <li>
            <Link
              href="http://www.linkedin.com/company/fraqvest/"
              className="text-[28px] text-fv-200 hover:text-opacity-75"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-linkedin-box-fill" />
            </Link>
          </li>
          <li>
            <Link
              href="https://fraqvest.medium.com/"
              className="text-[28px] text-fv-200 hover:text-opacity-75"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-medium-fill" />
            </Link>
          </li>
          <li>
            <Link
              href="mailto:team@fraqvest.com"
              className="text-[28px] text-fv-200 hover:text-opacity-75"
            >
              <i className="ri-mail-fill" />
            </Link>
          </li>
        </ul>

        <span className="flex items-center gap-1 font-rube text-[16px]/[16px] font-normal text-[#C5C8BA]">
          <i className="ri-copyright-line" /> 2023 Fraqvest. All Right Reserved{' '}
        </span>
      </footer>
    </>
  );
}
