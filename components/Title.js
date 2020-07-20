import React from "react";

export default function Title({ title }) {
  return (
    <div className="w-full leading-normal">
      <div className="font-semibold break-normal text-gray-900 pt-6 pb-2 text-4xl md:text-5xl">
        {title}
      </div>
      <hr className="border-b-2 border-gray-400 mt-6 mb-8 mx-4" />
    </div>
  );
}
