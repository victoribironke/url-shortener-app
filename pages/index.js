import Head from "next/head";
import Header from "../comps/Header";
import Description from "../comps/Description";
import Shortener from "../comps/Shortener";
import Footer from "../comps/Footer";
import Statistics from "../comps/Statistics";
import Boost from "../comps/Boost";
import Script from "next/script";

const Home = () => {
  return (
    <>
      <Head>
        <title>Frontend Mentor | URL Shortener App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <Script src="/script.js" defer />
      </Head>
      <Header />
      <Description />
      <Shortener />
      <Statistics />
      <Boost />
      <Footer />
    </>
  );
};

export default Home;
