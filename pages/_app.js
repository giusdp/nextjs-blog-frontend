import React from "react";
import Head from "next/head";
import "../styles/fonts.css";
import "../styles/index.css";
import { Nav, Footer } from "../components";

const App = ({ Component, pageProps }) => {
  return (
    <div className="lora">
      <Head>
        <title>Geedp's blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="My personal blog about programming and tech."
        />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content="Geedp's blog" />
        <meta
          name="og:description"
          property="og:description"
          content="My personal blog about programming and tech."
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Geedp's blog" />
        <meta
          name="twitter:description"
          content="My personal blog about programming and tech."
        />
        <meta name="twitter:creator" content="giusdp" />
        <link rel="icon" type="image/png" href="/static/favicon.ico" />
        <link rel="apple-touch-icon" href="/static/favicon.ico" />
      </Head>
      <Nav />
      <div className="px-4 md-px-6">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
};

// Wraps all components in the tree with the data provider
export default App;
