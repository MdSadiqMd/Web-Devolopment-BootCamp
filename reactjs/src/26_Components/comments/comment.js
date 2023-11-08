import { useState } from 'react';
import './comment.css';
import { commentData } from '../../26_Data/commentData';

const Comment = ({ comment }) => {
    const [showInput,setShowInput]=useState(false);
    const [commentBody,setCommentBody]=useState("");

    const handleAdd=()=>{
        let newComments={
            id:Date.now(),
            text:commentBody,
            replies:[]
        }
        handleAddComments(comment.id,newComments);
        setShowInput(false);
    }
  return (
    <div>
      <div className="comment-container">
        <h3>{comment.text}</h3>
        {showInput?<input type='text' autoFocus onChange={(e)=>setCommentBody(e.target.value)}/>:<div></div> }
        {
            showInput?(
                <div>
                    <button onClick={handleAdd}>Add</button>
                    <button onClick={()=>setShowInput(false)}>Cancel</button>
                </div>
            ):(
                <div>
                    <button onClick={()=>setShowInput(true)}>Reply</button>
                    <button>Delete</button>
                </div>
            )
        }
      </div>
      <div style={{paddingLeft:25}} >
        {
          comment?.replies?.map((ele) => (
            <Comment key={ele.id} comment={ele} handleAddComments={handleAddComments} />
          ))
        }
      </div>
    </div>
  );
};

export default Comment;
