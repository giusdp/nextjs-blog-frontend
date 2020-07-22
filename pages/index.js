import React from "react";
import { Articles, Title, Content, ContentBody } from "../components";
import matter from "gray-matter";
import path from "path";
import fs from "fs";
import { mapFilesToSlugPaths } from "./blog/[slug]";

const HomePage = ({ articlesData }) => {
  return (
    <Content>
      <Title title="Geedp's Blog" />
      <ContentBody>
        <header className="pb-6">
          👋 Welcome to my blog! Here you can find posts about computer science,
          tech and software development in general. Check out the footer for
          more info on me.
        </header>
        <Articles articles={articlesData} />
      </ContentBody>
    </Content>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync("content/articles");
  const slugs = mapFilesToSlugPaths(files).map((obj) => obj.params.slug);

  let articlesData = files
    .map((file) =>
      fs.readFileSync(path.join("content/articles", file)).toString()
    )
    .map((markdownWithMetadata) => matter(markdownWithMetadata))
    .map((parsedMD, i) => parsedMD.data);

  articlesData = articlesData.map((data, i) => {
    data.slug = slugs[i];
    return data;
  });

  return {
    props: {
      articlesData,
    },
  };
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
