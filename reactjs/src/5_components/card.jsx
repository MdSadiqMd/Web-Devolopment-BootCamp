import React from "react";

function Card({ channel }) { /*The Parameter represents the Prop which is further passed in the jsx below and manipulate the output and the value of the parameter is passed when the funtion card is called in App.jsx File */ 
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src="https://picsum.photos/150"
            alt="https://picsum.photos/150"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {channel} Channel  {/*Injecting the prop (or) handling the prop*/}
          </div>
          <a
            href="https://nothing.com"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Card Title
          </a>
          <p className="mt-2 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            malesuada enim vel tellus commodo, ac bibendum diam semper. Donec
            ultrices dignissim urna, vel varius tortor euismod et.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
