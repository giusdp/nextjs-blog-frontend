import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    articles {
      id
      title
      slug
      summary
      category {
        id
        name
      }
      published_at
    }
  }
`;

export default ARTICLES_QUERY;
