import React from "react";

export default function Content({ children }) {
  return (
    <div className="container w-full md:max-w-3xl mx-auto pt-20 mt-6">
      {children}
      <hr className="border-b-2 border-gray-400 mt-6 mb-8 mx-4" />
    </div>
  );
}
