import { useRouter } from "next/router";
import Query from "../components/Query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import ARTICLE_QUERY from "../apollo/queries/article/article";

const Article = () => {
  const router = useRouter();
  console.log(router);
  return (
    <Query query={ARTICLE_QUERY} id={router.query.id}>
      {({ data: { article } }) => {
        return (
          <div>
            <h1>{article.title}</h1>

            <div className="uk-container uk-container-small">
              <ReactMarkdown source={article.content} />
              <p>
                <Moment format="MMM Do YYYY">{article.published_at}</Moment>
              </p>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Article;
