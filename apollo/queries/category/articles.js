import gql from "graphql-tag";

const CATEGORY_ARTICLES_QUERY = gql`
  query Categories($name: String!) {
    categories(where: { name: $name }) {
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
