import Content from "../../components/Content";
import Title from "../../components/Title";
import ContentBody from "../../components/ContentBody";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";

const Article = ({ htmlContent, data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.summary}></meta>
      </Head>
      <Content>
        {data ? (
          <>
            <Title title={data.title} />
            <ContentBody>
              <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </ContentBody>
          </>
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

  const htmlContent = marked(parsedMarkdown.content);
  return {
    props: {
      htmlContent,
      data: parsedMarkdown.data,
    },
  };
};
export default Article;
