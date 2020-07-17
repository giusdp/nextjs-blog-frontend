import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import ARTICLE_QUERY from "../apollo/queries/article/article";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import Content from "../components/Content";
import Title from "../components/Title";

const Article = ({ slug }) => {
  const { loading, error, data } = useQuery(ARTICLE_QUERY, {
    variables: { slug: slug },
  });

  if (loading) return <div />;
  if (error) return `Error! ${error.message}`;
  const article = data.articles[0];
  return (
    <Content>
      <Title title={article.title} />
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
