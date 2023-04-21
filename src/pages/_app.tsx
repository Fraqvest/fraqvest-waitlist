import ModalProvider from '@/contex/modalContext';
import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.min.css';
import 'remixicon/fonts/remixicon.css';

import type { AppProps } from 'next/app';
import NavBar from '@/layout/NavBar';
import Footer from '@/layout/Footer';
import { ToastContainer } from 'react-toastify';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ModalProvider>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </ModalProvider>
      {/* Google tag (gtag.js) */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="ga-script" strategy="lazyOnload">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
      page_path: window.location.pathname,
    });
        `}
      </Script>
    </>
  );
}
