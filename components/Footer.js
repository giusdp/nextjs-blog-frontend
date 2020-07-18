import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white border-t border-gray-400 shadow mt-6 bg-gray-100">
        <div className="container max-w-4xl mx-auto flex py-8">
          <div className="w-full mx-auto flex flex-wrap">
            <div className="flex w-full md:w-1/2 ">
              <div className="px-8">
                <h3 className="font-bold text-gray-900">whoami</h3>
                <p className="py-4 text-gray-600 text-sm">
                  Italian guy who just finished a Master in Computer Science. My
                  main interests are in cloud computing, game and web dev. But
                  let's say software in general.
                </p>
              </div>
            </div>

            <div className="flex w-full md:w-1/2">
              <div className="px-8">
                <h3 className="font-bold text-gray-900">
                  You can find me here
                </h3>
                <ul className="list-reset items-center text-sm pt-3">
                  <li>
                    <a
                      className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"
                      href="mailto:depalma.gsp@gmail.com"
                    >
                      Send an email
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"
                      href="https://github.com/giusdp"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"
                      href="https://twitter.com/giusdp"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"
                      href="https://www.linkedin.com/in/giuseppe-de-palma-a98610158/"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
