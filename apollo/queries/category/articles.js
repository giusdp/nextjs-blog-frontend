import gql from "graphql-tag";

const CATEGORY_ARTICLES_QUERY = gql`
  query Category($id: ID!) {
    category(id: $id) {
      name
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
  }
`;

export default CATEGORY_ARTICLES_QUERY;
