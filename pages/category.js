import { useRouter } from "next/router";
import Articles from "../components/Articles";
import CATEGORY_ARTICLES_QUERY from "../apollo/queries/category/articles";
import Title from "../components/Title";
import { useQuery } from "@apollo/react-hooks";
import ContentBody from "../components/ContentBody";
import Content from "../components/Content";

const Category = () => {
  const router = useRouter();

  const { loading, error, data } = useQuery(CATEGORY_ARTICLES_QUERY, {
    variables: { id: router.query.id },
  });

  if (loading) return <div />;
  if (error) return `Error! ${error.message}`;

  return (
    <Content>
      <Title title={data.category.name} />
      <ContentBody>
        <Articles articles={data.category.articles} />
      </ContentBody>
    </Content>
  );
};

export default Category;
