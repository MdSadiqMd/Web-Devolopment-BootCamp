import './comment.css';

const Comment = ({ comment }) => {
  return (
    <div>
      <div className="comment-container">
        <h3>{comment.text}</h3>
        <div>
          <button>Reply</button>
          <button>Delete</button>
        </div>
      </div>
      <div>
        {
          comment?.replies?.map((ele) => (
            <Comment key={ele.id} comment={ele} />
          ))
        }
      </div>
    </div>
  );
};

export default Comment;
