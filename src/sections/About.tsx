/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
  return (
    <div className="h-full w-full bg-[#EFF9F0] px-2 py-12  lg:px-[108px]" id="about">
      <div className=" relative h-full max-h-[333px] w-full pb-[100px]">
        <Image
          src="/assets/fv-about-pattern.svg"
          alt=""
          width={1384}
          height={333}
          className=" absolute -mt-[83px] w-full lg:-mt-[180px]"
        />
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-2 lg:pb-14 lg:pt-[130px]">
        <div className="col-span-1 w-full text-center lg:max-w-[584px] lg:text-left">
          <h1 className="font-rube text-[40px] font-semibold leading-[48px] text-[#034C3C] lg:text-[60px]/[74px] lg:leading-[80px]">
            Start your real estate investing Journey with{' '}
            <span className="font-[400] italic text-[#ABB06D]">Fraqvest</span>
          </h1>
        </div>
        <div className="col-span-1 w-full py-4 text-center lg:max-w-[621px] lg:py-0 lg:text-left">
          <span className="text-[16px] font-[400] leading-[22px]  text-[#061E18] lg:text-[26px] lg:leading-[36px]">
            {' '}
            With Fraqvest, experience the power of owning fractional shares in prime global real estate properties,
            allowing you to build and grow a prosperous portfolio filled with stable, appreciating assets.
          </span>
          <div className="mx-auto mt-12 flex h-[126px] w-[126px] cursor-pointer items-center justify-center rounded-[160px] border border-[#034C3C] duration-200 ease-in hover:bg-fv-100 lg:h-[160px] lg:w-[160px]">
            <i className="ri-arrow-right-up-line text-center text-[55px] text-[#ABB06D] lg:text-[70px]"></i>
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:gap-8">
        <FirstCard />
        <SecondCard />
        <ThirdCard />
      </div>
    </div>
  );
};

export default AboutSection;

const FirstCard = () => (
  <div className="relative col-span-1 mb-4 flex min-h-[420px] flex-col items-center bg-[#061E18] px-[30px] lg:col-span-2 lg:mb-0 lg:min-h-[500px]  lg:flex-row lg:pl-[72px]">
    <div className="flex h-full w-full basis-[50%] flex-col justify-center  lg:max-w-[580px]">
      <h1 className="font-rube text-[28px] font-[600] leading-[34px] text-white lg:text-[50px] lg:leading-[80px] ">
        Easy Management
      </h1>
      <p className="py-4 font-rube text-[14px] leading-[20px] text-[#EFF9F0] lg:py-2 lg:pl-2 lg:text-[22px] lg:leading-[30px]">
        Monitor your portfolio, earn rental income, and receive asset reports, all from your phone.
      </p>
    </div>
    <div className="relative hidden h-full basis-[50%] lg:block">
      <img src="/assets/phone.png" alt="home-vest" className="absolute bottom-0 pl-16" />
    </div>
    <img
      src="/assets/mobile-phone.png"
      alt="diversify-vest"
      className="absolute bottom-0 right-[50px] mt-2 object-cover  lg:hidden"
    />
  </div>
);

const SecondCard = () => (
  <div className="relative col-span-1 mb-4 flex min-h-[420px] flex-col bg-[#034C3C] px-[30px] pt-[35px] lg:mb-0 lg:h-[500px] lg:pl-[72px] lg:pt-[72px]">
    <div className="w-full lg:max-w-[470px]">
      <h1 className="block font-rube text-[28px] font-[600] leading-[34px] text-[#EFF9F0] lg:text-[50px] lg:leading-[80px] ">
        Diversification
      </h1>
      <p className="mb-6 block py-4 font-rube text-[14px] leading-[20px] text-[#EFF9F0] lg:py-2 lg:pl-2 lg:text-[22px] lg:leading-[30px]">
        Reduce risk by owning parts of multiple properties instead of just one.
      </p>
      <img
        src="/assets/hand.png"
        alt="diversify-vest"
        className="absolute bottom-0 left-0 mt-2 hidden h-[260px] object-cover lg:block"
      />
      <img
        src="/assets/mobile-hand.png"
        alt="diversify-vest"
        className="absolute bottom-0 left-0 mt-2 h-[260px] object-cover lg:hidden"
      />
    </div>
  </div>
);

const ThirdCard = () => (
  <div className="relative col-span-1 mb-0 flex  min-h-[420px]  flex-col bg-[#ABB06D] px-[30px] pt-[35px] lg:mb-4 lg:h-[500px] lg:pl-[72px] lg:pt-[72px]">
    <div className="w-full lg:max-w-[515px]">
      <h1 className="block font-rube text-[28px] font-[600] leading-[34px] text-[#061E18] lg:text-[47px] lg:leading-[58px]">
        Accessible Real Estate Investing
      </h1>
      <p className="mb-6 block py-4 font-rube text-[14px] leading-[20px] text-[#061E18] lg:py-2 lg:pl-2 lg:text-[22px] lg:leading-[30px]">
        Reduce risk by owning parts of multiple properties instead of just one.
      </p>
      <img
        src="/assets/money.png"
        alt="diversify-vest"
        className="absolute bottom-0 right-[72px] mt-2 hidden h-[260px] object-cover lg:block"
      />
      <img
        src="/assets/mobile-money.png"
        alt="diversify-vest"
        className="absolute bottom-0 right-0 mt-2 h-[260px] object-cover lg:hidden"
      />
    </div>
  </div>
);
