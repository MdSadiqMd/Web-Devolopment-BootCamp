import React, { useState } from 'react';
import './comment.css';

const Comment = ({ comment, handleAddComments, handleCommentDelete }) => {
  const [showInput, setShowInput] = useState(false);
  const [commentBody, setCommentBody] = useState("");

  const handleAdd = () => {
    let newComment = {
      id: Date.now(),
      text: commentBody,
      replies: [],
    };
    handleAddComments(comment.id, newComment);
    setShowInput(false);
  }

  const handleDelete = () => {
    handleCommentDelete(comment.id);
  }

  return (
    <div>
      <div className={`${comment.text} && comment-container`}>
        <h3>{comment.text}</h3>
        {showInput ? <input type='text' autoFocus onChange={(e) => setCommentBody(e.target.value)} /> : null}
        <div>
          {showInput ? (
            <div>
              <button onClick={handleAdd}>Add</button>
              <button onClick={() => setShowInput(false)}>Cancel</button>
            </div>
          ) : (
            <div>
              <button onClick={() => setShowInput(true)}>Reply</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          )}
        </div>
      </div>
      <div style={{ paddingLeft: 25 }}>
        {comment.replies && comment.replies.map((ele) => (
          <Comment
            key={ele.id}
            comment={ele}
            handleAddComments={handleAddComments}
            handleCommentDelete={handleCommentDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Comment;
