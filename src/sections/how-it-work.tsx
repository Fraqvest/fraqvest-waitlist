import Image from 'next/image';
import { PropsWithChildren, useState } from 'react';

type ItemType = {
  header: string;
  decription: string;
  image: string;
};

interface HowItWorkCardProps extends PropsWithChildren {
  item: ItemType;
  value: string;
  onHoverOnClick: () => void;
}

const items: ItemType[] = [
  {
    header: '1. Sign Up',
    decription: 'Create a free Fraqvest account to access global real estate investment opportunities.',
    image: '/assets/vectors/vector-1.png'
  },
  {
    header: '2. Browse Opportunities',
    decription: 'Explore expert-curated properties with detailed information to help you decide.',
    image: '/assets/vectors/vector-2.png'
  },
  {
    header: '3. Choose Investment',
    decription: 'Select your desired property and invest as little as $50.',
    image: '/assets/vectors/vector-3.png'
  },
  {
    header: '4. Buy Fractional Shares',
    decription: 'Buy Fractional Shares',
    image: '/assets/vectors/vector-4.png'
  },
  {
    header: '5. Monitor & Manage Portfolio',
    decription: 'Use the Fraqvest dashboard to track investment performance and receive updates.',
    image: '/assets/vectors/vector-5.png'
  }
];

export default function HowItWork() {
  const [itemImage, setItemImage] = useState(items[0].image);

  return (
    <section id="how-it-works" className="h-full w-full bg-white px-4 py-[50px] lg:px-[108px]">
      <hgroup className="flex w-full max-w-[538px] flex-col items-center gap-2 text-center lg:items-start lg:text-left">
        <h1 className="font-rube text-[40px]/[48px] font-semibold capitalize text-fv-100 md:text-[70px]/[84px]">
          How it works
        </h1>
        <p className="px-4 font-rube text-[16px]/[22px] text-fv-500 md:text-[26px]/[36px]">
          Heres a step-by-step guide on how the process works:
        </p>
      </hgroup>

      <div className="mb-[280px] flex h-full w-full flex-col-reverse items-start gap-[80px] py-14 md:flex-row">
        <ul className="w-full max-w-[576px]">
          {items.map((item, index) => (
            <HowItWorkCard key={index} value={itemImage} item={item} onHoverOnClick={() => setItemImage(item.image)}>
              {item.decription}
            </HowItWorkCard>
          ))}
        </ul>
        <div>
          <Image src={itemImage} alt="" width={580} height={630} className="duration-300 ease-in-out" priority />
        </div>
      </div>
    </section>
  );
}

const HowItWorkCard = ({ item, value, onHoverOnClick, children }: HowItWorkCardProps) => {
  const bgActive = item.image === value ? 'bg-[#E0E0E0]' : 'bg-white';
  const headerActive = item.image === value ? 'text-fv-100' : 'text-[#828282]';
  const descActive = item.image === value ? 'text-fv-500' : 'text-[#828282]';
  return (
    <li onClick={onHoverOnClick} onMouseMove={onHoverOnClick} className="cursor-pointer duration-300 ease-in-out">
      <div
        className={`group flex w-full flex-col items-start gap-2.5 px-8 py-6 font-rube font-normal md:px-[53px] ${bgActive}`}
      >
        <h4 className={`text-[20px]/[26px] font-medium ${headerActive}`}>{item.header}</h4>
        <p className={`text-[14px]/[20px] ${descActive}`}>{children}</p>
      </div>
    </li>
  );
};

// <li onClick={onHoverOnClick} onMouseMove={onHoverOnClick}>
//   <div className="group flex w-full flex-col items-start gap-2.5 px-[53px] py-6 font-rube font-normal hover:bg-[#E0E0E0]">
//     <h4 className="text-[20px]/[26px] text-[#828282] group-hover:text-fv-100">{header}</h4>
//     <p className="text-[14px]/[20px] text-[#828282] group-hover:text-fv-500">{children}</p>
//   </div>
// </li>
