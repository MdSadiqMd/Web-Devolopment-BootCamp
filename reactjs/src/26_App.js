// App.js
import React, { useState } from 'react';
import Comments from './26_Components/comments/comment';
import './26_App.css';
import { commentData } from './26_Data/commentData';
import useCommentHook from './useCommentHook';

const App = () => {
  const [comments, setComments] = useState(commentData);
  const { addComment, deleteComment } = useCommentHook();

  const handleAddComments = (commentId, comment) => {
    const updatedTree = addComment(comments, commentId, comment);
    setComments(updatedTree);
  };

  const handleCommentDelete = (commentId) => {
    const updatedTree = deleteComment(comments, commentId);
    setComments(updatedTree);
  };

  return (
    <div>
      <Comments comment={comments} handleAddComments={handleAddComments} handleCommentDelete={handleCommentDelete} />
    </div>
  );
}

export default App;
