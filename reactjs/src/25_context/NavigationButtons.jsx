import React from 'react'
import { useSearchParams } from 'react-router-dom';
import {Link} from 'react-router-dom'

function NavigationButtons() {
    const [searchParams, setSearchParams] = useSearchParams();
  
    const updateQueryParam = (param, value) => {
      // Set the query parameter with the specified value
      setSearchParams(param, value);
    };
  
    return (
      <div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded m-2"
          onClick={() => updateQueryParam('page', 'home')}
        >
          <Link to="/">Go to Home</Link>
        </button>
  
        <button
          className="bg-green-500 text-white py-2 px-4 rounded m-2"
          onClick={() => updateQueryParam('page', 'profile')}
        >
          <Link to="/profile">Go to Profile</Link>
        </button>
      </div>
    );
}

export default NavigationButtons