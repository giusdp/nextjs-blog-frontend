import Content from "../../components/Content";
import Title from "../../components/Title";
import ContentBody from "../../components/ContentBody";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";
import ReactMarkdown from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const CodeBlock = ({ language, value }) => {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
};

const Article = ({ content, data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.summary}></meta>
      </Head>
      <Content>
        {data ? (
          <div>
            <Title title={data.title} />
            <ContentBody>
              <ReactMarkdown
                escapeHtml={false}
                source={content}
                renderers={{ code: CodeBlock }}
              />
            </ContentBody>
          </div>
        ) : (
          <ContentBody>Error loading article... 😟</ContentBody>
        )}
      </Content>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("articles");
  const paths = mapFilesToSlugPaths(files);
  return {
    paths,
    fallback: false,
  };
};

export const mapFilesToSlugPaths = (files) =>
  files.map((filename) => ({
    params: {
      slug: removeMDExt(filename),
    },
  }));

const removeMDExt = (filename) => filename.replace(".md", "");

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs
    .readFileSync(path.join("articles", slug + ".md"))
    .toString();
  const parsedMarkdown = matter(markdownWithMetadata);

  const content = marked(parsedMarkdown.content);
  return {
    props: {
      content,
      data: parsedMarkdown.data,
    },
  };
};
export default Article;
