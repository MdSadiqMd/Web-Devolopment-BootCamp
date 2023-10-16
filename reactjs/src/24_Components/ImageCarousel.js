import React from 'react';
import MyCard from './MyCard';
import "../24_App.css"

const ImageCarousel = () => {
  return (
    <div className='product-carousel overflow-hidden relative'>
      <button className='pre-btn absolute top-50 left-2 transform translate-y-50 bg-gray-200 p-2 rounded-full'>
        <p>&lt;</p>
      </button>
      <button className='next-btn absolute top-50 right-2 transform translate-y-50 bg-gray-200 p-2 rounded-full'>
        <p>&gt;</p>
      </button>
      <div className='product-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4'>
        <MyCard cardno='1' className='custom-bg-red' />
        <MyCard cardno='2' className='custom-bg-blue' />
        <MyCard cardno='3' className='custom-bg-green' />
        <MyCard cardno='4' className='custom-bg-yellow' />
        <MyCard cardno='5' className='custom-bg-pink' />
        <MyCard cardno='6' className='custom-bg-purple' />
        <MyCard cardno='7' className='custom-bg-indigo' />
        <MyCard cardno='8' className='custom-bg-teal' />
        <MyCard cardno='9' className='custom-bg-orange' />
        <MyCard cardno='10' className='custom-bg-gray' />
      </div>
    </div>
  );
}

export default ImageCarousel;
