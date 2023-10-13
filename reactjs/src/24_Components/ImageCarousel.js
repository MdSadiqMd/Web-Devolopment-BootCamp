import React from 'react'
import MyCard from './MyCard'

const ImageCarousel = () => {
  return (
    <div className='product-carousel'>
        <button className='pre-btn'><p>&lt;</p></button>
        <button className='next-btn'><p>&gt;</p></button>
        <div className='product-container'>
            <MyCard cardno='1'/>
            <MyCard cardno='2'/>
            <MyCard cardno='3'/>
            <MyCard cardno='4'/>
            <MyCard cardno='5'/>
            <MyCard cardno='6'/>
            <MyCard cardno='7'/>
            <MyCard cardno='8'/>
            <MyCard cardno='9'/>
            <MyCard cardno='10'/>
        </div>
    </div>
  )
}

export default ImageCarousel