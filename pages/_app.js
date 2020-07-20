import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import "../styles/fonts.css";
import "../styles/index.css";
import Footer from "../components/Footer";

const App = ({ Component, pageProps }) => {
  return (
    <div className="lora">
      <Head>
        <title>Geedp's blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

// Wraps all components in the tree with the data provider
export default App;
