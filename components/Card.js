import React from "react";
import Link from "next/link";
import Moment from "react-moment";

export default function Card({ article }) {
  return (
    <div className="rounded overflow-hidden shadow-lg border border-teal-200 my-6">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <Link href="/[slug]" as={`${article.slug}`}>
            <a> {article.title} </a>
          </Link>
        </div>
        <p className="text-gray-700 text-base">{article.summary}</p>
      </div>
      <div className="flex px-6 py-4">
        {article.published_at && (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            <Moment format="MMM Do YYYY">{article.published_at}</Moment>
          </span>
        )}
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{article.category ? article.category.name : "NoCategory"}
        </span>
        <div className="flex-1" />
        <Link href="/[slug]" as={`/${article.slug}`}>
          <button className="inline-block bg-transparent hover:bg-teal-500 text-teal-500 rounded-full font-semibold hover:text-white px-4 border border-teal-500 hover:border-transparent">
            Read
          </button>
        </Link>
      </div>
    </div>
  );
}
