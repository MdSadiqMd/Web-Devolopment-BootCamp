import React from 'react';
import MyCard from './MyCard';

const ImageCarousel = () => {
  return (
    <div className='product-carousel overflow-hidden relative'>
      <button className='pre-btn absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full'>
        <p>&lt;</p>
      </button>
      <button className='next-btn absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full'>
        <p>&gt;</p>
      </button>
      <div className='product-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4'>
        <MyCard cardno='1' className='bg-red-200' />
        <MyCard cardno='2' className='bg-blue-200' />
        <MyCard cardno='3' className='bg-green-200' />
        <MyCard cardno='4' className='bg-yellow-200' />
        <MyCard cardno='5' className='bg-pink-200' />
        <MyCard cardno='6' className='bg-purple-200' />
        <MyCard cardno='7' className='bg-indigo-200' />
        <MyCard cardno='8' className='bg-teal-200' />
        <MyCard cardno='9' className='bg-orange-200' />
        <MyCard cardno='10' className='bg-gray-200' />
      </div>
    </div>
  );
}

export default ImageCarousel;
