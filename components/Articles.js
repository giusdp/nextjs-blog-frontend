import React from "react";
import Card from "./Card";
const Articles = ({ articles }) => {
  return (
    <div>
      {articles.map((article, i) => {
        return <Card article={article} key={`article__${article.id}`} />;
      })}
    </div>
  );
};

export default Articles;
