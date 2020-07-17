import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import ARTICLE_QUERY from "../apollo/queries/article/article";
import { useQuery } from "@apollo/react-hooks";

const Article = () => {
  const router = useRouter();
  console.log(router);

  const { loading, error, data } = useQuery(ARTICLE_QUERY, {
    variables: { slug: router.query.slug },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return <div></div>;
};

export default Article;
