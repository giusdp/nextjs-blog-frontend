import React from "react";

export default function Title({ title }) {
  return (
    <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
      <h1 className=" font-bold break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
        {title}
      </h1>
    </div>
  );
}
