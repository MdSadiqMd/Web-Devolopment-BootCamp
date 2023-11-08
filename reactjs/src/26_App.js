import React, { useState } from 'react';
import Comments from './26_Components/comments/comment';
import './26_App.css';
import { commentData } from './26_Data/commentData';

const App = () => {
  const [comments,setComments]=useState(commentData);
  const handleAddComments=(commentId,comment)=>{

  }
  return (
    <div>
      <Comments key={comments.id} comment={commentData} handleAddComments={handleAddComments} />
    </div>
  );
}

export default App;
