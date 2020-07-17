import React from "react";
import Link from "next/link";

export default function Card({ article }) {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <Link href={article.slug}>
            <a> {article.title} </a>
          </Link>
        </div>
        <p className="text-gray-700 text-base">{article.summary}</p>
      </div>
      <div className="flex px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{article.category.name}
        </span>
        <div className="flex-1" />
        <Link href={{ pathname: article.slug }}>
          <button className="inline-block bg-transparent hover:bg-teal-500 text-teal-500 rounded-full font-semibold hover:text-white px-4 border border-teal-500 hover:border-transparent">
            READ
          </button>
        </Link>
      </div>
    </div>
  );
}
