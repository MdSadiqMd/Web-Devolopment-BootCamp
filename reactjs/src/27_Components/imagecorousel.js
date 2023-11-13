import React from 'react'
import Mycard from './Mycard'
import './imagecorousel.css'

const Imagecorousel = () => {
    // Scrolling Logic
    let cards=document.querySelector('.product-container');
    const btnprev=()=>{
        let width=cards.clientWidth;
        cards.scrollLeft=cards.scrollLeft-width;
    }
    const btnnext=()=>{
        let width=cards.clientWidth;
        cards.scrollLeft=cards.scrollLeft+width;
    }
  return (
    <div className='product-corousel'>
        <button className='pre-btn' onClick={btnprev}><p>&lt;</p></button>
        <button className='next-btn' onClick={btnnext}><p>&gt;</p></button>

        <div className='product-container'>
            <Mycard cardno='1'/>
            <Mycard cardno='2'/>
            <Mycard cardno='3'/>
            <Mycard cardno='4'/>
            <Mycard cardno='5'/>
            <Mycard cardno='6'/>
            <Mycard cardno='7'/>
            <Mycard cardno='8'/>
            <Mycard cardno='9'/>
            <Mycard cardno='10'/>
        </div>
    </div>
  )
}

export default Imagecorousel