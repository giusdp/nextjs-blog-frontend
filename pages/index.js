import React from "react";
import Articles from "../components/Articles";
import Query from "../components/Query";
import ARTICLES_QUERY from "../apollo/queries/article/articles";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="container w-full md:max-w-3xl mx-auto pt-20">
      <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
        <h1 className=" font-bold break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
          Geedp's Blog
        </h1>
      </div>
      <p className="py-6">
        👋 Welcome fellow{" "}
        <a
          className="text-teal-500 no-underline hover:underline"
          href="https://www.tailwindcss.com"
        >
          Tailwind CSS
        </a>{" "}
        and miminal monochrome blog fan. This starter template provides a
        starting point to create your own minimal monochrome blog using Tailwind
        CSS and vanilla Javascript.
      </p>

      <Query query={ARTICLES_QUERY}>
        {({ data: { articles } }) => {
          return <Articles articles={articles} />;
        }}
      </Query>

      <hr className="border-b-2 border-gray-400 mt-6 mb-8 mx-4" />

      <Footer />
    </div>
  );
};

export default HomePage;

{
  /* <blockquote className="border-l-4 border-teal-500 italic my-8 pl-8 md:pl-12">
          Example of blockquote - Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet
          ligula.
        </blockquote>

        <p className="py-6">Example code block:</p>
        <pre className="bg-gray-900 rounded text-white font-mono text-base p-2 md:p-4">
          <code className="break-words whitespace-pre-wrap">
            &lt;header class="site-header outer"&gt; &lt;div class="inner"&gt;
            &lt;/div&gt; &lt;/header&gt;
          </code>
        </pre> */
}
