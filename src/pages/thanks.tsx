import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fraqvest | Fractional Real Estate Investing for a Modern, Accessible Future</title>
        <meta
          name="description"
          content="Fraqvest empowers you to invest in global rental properties within minutes. Enjoy monthly rent payments and discover the simplest way to diversify your real estate investments"
        />
        <meta
          name="keywords"
          content="Fraqvest, fraqvest, Real Estate,  global rental properties, Accessible Future, btc, invest, blockchain, Investing, web3, ai, AI, dapp, dex, NFT, community, Blockchain"
        />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main className="fixed inset-0 z-30 flex h-screen w-full items-center justify-center bg-fv-500 backdrop-blur-[37px] backdrop-filter">
        <div className="relative h-[490px] w-full rounded-sm border border-fv-200 md:max-w-[526px]">
          <div className="w-full items-center justify-center p-8 text-center">
            <div className="flex w-full justify-center">
              <i className="ri-checkbox-circle-fill  text-[105px] text-fv-200" />
            </div>
            <h1 className=" pt-4 text-center font-rube text-[25px] font-normal leading-[38px] text-white lg:text-[36px] lg:leading-[44px]">
              Thank you for your interest in Fraqvest
            </h1>
            <p className="py-4 text-center font-rube text-[13px] font-[400] leading-[19px] text-[#828282]">
              We’re Glad To Have You!
            </p>

            <Link
              href="/"
              className="mt-6 flex w-full items-center justify-center gap-2.5 bg-fv-200 px-12 py-4 text-center font-rube text-[1rem]/[1.4rem] font-normal text-fv-500 hover:bg-opacity-90"
            >
              Continue Exploring
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
