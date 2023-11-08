// useCommentHook.js
const useCommentHook = (comments) => {
    const addComment = (tree, commentId, newComment) => {
      if (tree.id === commentId) {
        tree.replies = tree.replies ? [newComment, ...tree.replies] : [newComment];
        return true;
      }
  
      // Recursively add comment to replies
      const updatedReplies = (tree.replies || []).map((ele) =>
        addComment(ele, commentId, newComment)
      );
  
      return { ...tree, replies: updatedReplies };
    };
  
    const deleteComment = (tree, commentId) => {
      if (tree.id === commentId) {
        return null; // To delete the comment
      }
  
      // Recursively delete comment from replies
      const updatedReplies = (tree.replies || []).filter((ele) =>
        deleteComment(ele, commentId)
      );
  
      return { ...tree, replies: updatedReplies };
    };
  
    return { addComment, deleteComment };
  };
  
  export default useCommentHook;
  