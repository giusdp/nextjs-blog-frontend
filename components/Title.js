import React from "react";

export default function Title({ title }) {
  return (
    <div className="w-full px-4 md:px-6 leading-normal">
      <div className="font-semibold italic break-normal text-gray-900 pt-6 pb-2 text-4xl md:text-5xl">
        {title}
      </div>
    </div>
  );
}
