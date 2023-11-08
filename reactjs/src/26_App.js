import React from 'react';
import Comments from './26_Components/comments/comment';
import './26_App.css';
import { commentData } from './26_Data/commentData';

const App = () => {
  return (
    <div>
      <Comments comment={commentData} />
    </div>
  );
}

export default App;
