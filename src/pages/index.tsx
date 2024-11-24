import { useModalContext } from '@/contex/modalContext';
import ModalWraper from '@/modal';
import Hero from '@/sections/hero';
import HowItWork from '@/sections/how-it-work';
import AboutSection from '@/sections/About';
import JoinWaitlistForm from '@/modal/JoinWaitlistForm';
import Head from 'next/head';

export default function Home() {
  const modalHook = useModalContext();
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
        <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-5WZ2GJ5KFF"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5WZ2GJ5KFF');
</script>
          
      </Head>

      {modalHook?.displayModal && (
        <ModalWraper>
          <JoinWaitlistForm />
        </ModalWraper>
      )}
      <Hero />
      <AboutSection />
      <HowItWork />
    </>
  );
}
