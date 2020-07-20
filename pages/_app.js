import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import "../styles/fonts.css";
import Footer from "../components/Footer";

const App = ({ Component, pageProps }) => {
  return (
    <div className="lora">
      <Head>
        <title>Geedp's blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

// Wraps all components in the tree with the data provider
export default App;
