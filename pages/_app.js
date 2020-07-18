import React from "react";
import Head from "next/head";
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../apollo/apollo";
import Nav from "../components/Nav";
import "../styles/progress-bar.css";
import "../styles/fonts.css";
import Footer from "../components/Footer";

const App = ({ Component, pageProps, apollo }) => {
  return (
    <ApolloProvider client={apollo}>
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
    </ApolloProvider>
  );
};

// Wraps all components in the tree with the data provider
export default withData(App);
