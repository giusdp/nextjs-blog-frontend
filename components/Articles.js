import React from "react";
import Card from "./Card";
const Articles = ({ articles }) => {
  return (
    <div>
      {articles
        .sort((a1, a2) =>
          new Date(a1.published_at) < new Date(a2.published_at) ? 1 : -1
        )
        .map((article, i) => {
          return <Card article={article} key={`article__${i}`} />;
        })}
    </div>
  );
};

export default Articles;
