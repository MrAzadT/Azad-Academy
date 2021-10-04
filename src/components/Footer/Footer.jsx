import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-indigo-400 text-white relative pt-1 border-b-2 border-blue-700">
        <div className="container mx-auto px-6">
          <div className="sm:flex sm:mt-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
              <div className="flex flex-col w-2/5 ">
                <span className="font-bold  uppercase mb-2">Learn more.</span>
                <p>
                  Hello guys, if you want to become a web developer in 2021 but
                  not sure which programming language is best for web
                  development then you have come to the right place. Earlier, I
                  have shared the best web development courses and web developer
                  roadmap and today, I am going to talk about the 5 best
                  programming languages for web development in 2021. Yes, that
                  includes Javascript.
                </p>
              </div>
              <div className="flex flex-col">
                <span className="font-bold  uppercase mt-4 md:mt-0 mb-2"></span>
                <span className="my-2">
                  <a
                    href="/"
                    className="text-white text-md hover:text-blue-500"
                  >
                    <i className=" topIcon fa-2x fab fa-linkedin"></i>
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="/"
                    className="text-white  text-md hover:text-blue-500"
                  >
                    <i className=" topIcon fa-2x  fab fa-facebook-square"></i>
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="/"
                    className="text-white text-md hover:text-blue-500"
                  >
                    <i className=" topIcon fa-2x fab fa-twitter"></i>
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="/"
                    className="text-white text-md hover:text-blue-500"
                  >
                    <i className=" topIcon fa-2x fab fa-github-square"></i>
                  </a>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold  uppercase mt-4 md:mt-0 mb-2">
                  Subscribe Now
                </span>
                <span className="my-2">
                  <input
                    type="text"
                    className="h-14  w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
                    placeholder="Email"
                  />
                </span>
                <span className="my-2">
                  <button className="h-10  w-32 text-white rounded-lg bg-green-500 hover:bg-green-700">
                    Subscribe
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6">
          <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
              <p className="text-sm font-bold mb-2">© 2021 by Azad</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
