import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-indigo-400 text-white relative pt-1 border-b-2 border-blue-700">
        <div className="container mx-auto px-6">
          <div className="sm:flex sm:mt-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
              <div className="flex flex-col w-2/5 ">
                <span className="font-bold  uppercase mb-2">about</span>
                <p>
                  Everyone’s talking about coding, but where do you start? This
                  path will give you an introduction to the world of code and
                  basic concepts. By the end, you’ll know whether Data Science,
                  Computer Science or Web Development is right for you.
                </p>
              </div>
              <div className="flex flex-col">
                <span className="font-bold  uppercase mt-4 md:mt-0 mb-2">
                  Icon
                </span>
                <span className="my-2">
                  <a
                    href="/"
                    className="text-white text-md hover:text-blue-500"
                  >
                    <i className=" topIcon fab fa-linkedin"></i>
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="/"
                    className="text-white  text-md hover:text-blue-500"
                  >
                    <i className=" topIcon fab fa-facebook-square"></i>
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="/"
                    className="text-white text-md hover:text-blue-500"
                  >
                    <i className=" topIcon fab fa-twitter"></i>
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="/"
                    className="text-white text-md hover:text-blue-500"
                  >
                    <i className=" topIcon fab fa-github-square"></i>
                  </a>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold  uppercase mt-4 md:mt-0 mb-2">
                  Subscribe
                </span>
                <span className="my-2">
                  <input
                    type="text"
                    className="h-14  w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
                    placeholder="Email"
                  />
                </span>
                <span className="my-2">
                  <button className="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600">
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
              <p className="text-sm font-bold mb-2">© 2020 by Azad</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
