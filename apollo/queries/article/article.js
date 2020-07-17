import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
  query Articles($slug: String!) {
    article(slug: $slug) {
      id
      title
      content
      category {
        id
        name
      }
      published_at
    }
  }
`;

export default ARTICLE_QUERY;
