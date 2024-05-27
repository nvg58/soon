import 'aos/dist/aos.css';
import '../styles/globals.scss'
import Head from "next/head";

import useWindowSize from "../hooks/useWindowDimensions";
import {useEffect} from "react";

import AOS from "aos";

function App({ Component, pageProps }) {
  const { height, width } = useWindowSize();

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "smooth",
      once: true,
      mirror: true
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover" />

        <title>dex3.fi - A lighting-fast, hassle-free platform that turbocharges your meme trading adventure</title>
        <meta name="title" content="dex3.fi - A lighting-fast, hassle-free platform that turbocharges your meme trading adventure" />
        <meta name="description" content="dex3.fi - A lighting-fast, hassle-free platform that turbocharges your meme trading adventure. Crafted by degens, tailored for enthusiasts!" />
        <meta name="keywords" content="Web3, Decentralize, Revolution" />

        <meta property="og:site_name" content="Dex3" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dex3.fi" />
        <meta property="og:title" content="dex3.fi - A lighting-fast, hassle-free platform that turbocharges your meme trading adventure" />
        <meta property="og:description" content="dex3.fi - A lighting-fast, hassle-free platform that turbocharges your meme trading adventure. Crafted by degens, tailored for enthusiasts!" />
        <meta property="og:image" content="/thumbnail.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dex3.fi/" />
        <meta property="twitter:title" content="dex3.fi - A lighting-fast, hassle-free platform that turbocharges your meme trading adventure" />
        <meta property="twitter:description" content="dex3.fi - A lighting-fast, hassle-free platform that turbocharges your meme trading adventure. Crafted by degens, tailored for enthusiasts!" />
        <meta property="twitter:image" content="/thumbnail.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
