
import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 pt-12 text-gray-500 bg-white">
      <div className="flex flex-col md:flex-row justify-between gap-12 border-b border-gray-200 pb-10">

        {/* Logo and Description */}
        <div className="w-full md:max-w-sm">
          <img className='h-9' src={assets.logo} alt="dummylogo" />

          <p className="mt-5 text-sm leading-7 text-gray-500">
            Your all-in-one AI platform to create content, generate images,
            and bring your ideas to life with the power of artificial intelligence.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col sm:flex-row flex-1 justify-between gap-10 md:justify-end md:gap-16">
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            <ul className="text-sm space-y-3">
              <li>
                <a href="/" className="hover:text-indigo-600 transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-indigo-600 transition-colors">About us</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-indigo-600 transition-colors">Contact us</a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-indigo-600 transition-colors">Privacy policy</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full sm:max-w-sm">
            <h2 className="font-semibold mb-5 text-gray-800">
              Subscribe to our newsletter
            </h2>

            <p className="text-sm leading-6">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>

            <form
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full min-w-0 h-11 px-4 text-sm text-gray-700 bg-gray-50 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />

              <button
                type="submit"
                className="h-11 px-5 bg-primary hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors duration-300 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-5 text-center text-xs sm:text-sm text-gray-500">
        Copyright © {new Date().getFullYear()} Quick AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 