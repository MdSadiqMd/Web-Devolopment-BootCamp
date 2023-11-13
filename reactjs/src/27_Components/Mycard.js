import React from 'react';
import './Mycard.css'

const Mycard = (props) => {
  return (
    <div className='mycard'>
        card no {props.cardno}
    </div>
  );
};

export default Mycard;
