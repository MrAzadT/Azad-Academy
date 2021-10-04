import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="footer bg-indigo-500 text-white relative pt-1 border-b-2 border-blue-700">
        <div class="container mx-auto px-6">
          <div class="sm:flex sm:mt-8">
            <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
              <div class="flex flex-col w-2/5 ">
                <span class="font-bold  uppercase mb-2">about</span>
                <p>
                  Everyone’s talking about coding, but where do you start? This
                  path will give you an introduction to the world of code and
                  basic concepts. By the end, you’ll know whether Data Science,
                  Computer Science or Web Development is right for you.
                </p>
              </div>
              <div class="flex flex-col">
                <span class="font-bold  uppercase mt-4 md:mt-0 mb-2">Icon</span>
                <span class="my-2">
                  <a href="/" class="text-white text-md hover:text-blue-500">
                    <i className=" topIcon fab fa-linkedin"></i>
                  </a>
                </span>
                <span class="my-2">
                  <a href="/" class="text-white  text-md hover:text-blue-500">
                    <i className=" topIcon fab fa-facebook-square"></i>
                  </a>
                </span>
                <span class="my-2">
                  <a href="/" class="text-white text-md hover:text-blue-500">
                    <i className=" topIcon fab fa-twitter"></i>
                  </a>
                </span>
                <span class="my-2">
                  <a href="/" class="text-white text-md hover:text-blue-500">
                    <i className=" topIcon fab fa-github-square"></i>
                  </a>
                </span>
              </div>
              <div class="flex flex-col">
                <span class="font-bold  uppercase mt-4 md:mt-0 mb-2">
                  Subscribe
                </span>
                <span class="my-2">
                  <input
                    type="text"
                    className="h-14  w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
                    placeholder="Email"
                  />
                </span>
                <span class="my-2">
                  <button className="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600">
                    Subscribe
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="container mx-auto px-6">
          <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
            <div class="sm:w-2/3 text-center py-6">
              <p class="text-sm font-bold mb-2">© 2020 by Azad</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
