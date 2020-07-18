import { useRouter } from "next/router";
import Articles from "../../components/Articles";
import CATEGORY_ARTICLES_QUERY from "../../apollo/queries/category/articles";
import Title from "../../components/Title";
import { useQuery } from "@apollo/react-hooks";
import ContentBody from "../../components/ContentBody";
import Content from "../../components/Content";
import ProgressBar from "../../components/progressbar/ProgressBar";

const Category = ({ name }) => {
  const { loading, error, data } = useQuery(CATEGORY_ARTICLES_QUERY, {
    variables: { name: name },
  });

  if (loading) return <ProgressBar />;
  if (error) return `Error! ${error.message}`;

  const category = data.categories[0];
  return (
    <Content>
      <Title title={category.name} />
      <ContentBody>
        <Articles articles={category.articles} />
      </ContentBody>
    </Content>
  );
};

export async function getServerSideProps(context) {
  const { name } = context.query;

  return {
    props: { name: name },
  };
}

export default Category;
