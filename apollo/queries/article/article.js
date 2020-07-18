import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
  query Articles($slug: String!) {
    articles(where: { slug: $slug }) {
      id
      title
      content
      category {
        id
        name
      }
    }
  }
`;

export default ARTICLE_QUERY;
