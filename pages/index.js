import React from "react";
import Articles from "../components/Articles";
import ARTICLES_QUERY from "../apollo/queries/article/articles";
import Footer from "../components/Footer";
import { useQuery } from "@apollo/react-hooks";
import Title from "../components/Title";
import Content from "../components/Content";
import ContentBody from "../components/ContentBody";

const HomePage = () => {
  const { loading, error, data } = useQuery(ARTICLES_QUERY);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <Content>
      <Title title="Geedp's Blog" />
      <ContentBody>
        <p className="pb-6">
          👋 Welcome fellow{" "}
          <a
            className="text-teal-500 no-underline hover:underline"
            href="https://www.tailwindcss.com"
          >
            Tailwind CSS
          </a>{" "}
          and miminal monochrome blog fan. This starter template provides a
          starting point to create your own minimal monochrome blog using
          Tailwind CSS and vanilla Javascript.
        </p>
        <Articles articles={data.articles} />
      </ContentBody>
    </Content>
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
