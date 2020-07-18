import ReactMarkdown from "react-markdown";
import ARTICLE_QUERY from "../apollo/queries/article/article";
import { useQuery } from "@apollo/react-hooks";
import Content from "../components/Content";
import Title from "../components/Title";
import ContentBody from "../components/ContentBody";

const Article = ({ slug }) => {
  const { loading, error, data } = useQuery(ARTICLE_QUERY, {
    variables: { slug: slug },
  });

  if (loading) return <div />;
  if (error) return `Error! ${error.message}`;
  const article = data.articles[0];

  return (
    <Content>
      {article ? (
        <>
          <Title title={article.title} />
          <ContentBody>
            <ReactMarkdown source={article.content} />
          </ContentBody>
        </>
      ) : (
        <ContentBody>Error loading article... 😟</ContentBody>
      )}
    </Content>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;

  return {
    props: { slug: slug },
  };
}

export default Article;
