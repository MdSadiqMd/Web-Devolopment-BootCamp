const PostsCard=({post}:{post:Post})=>{
    return(
        <div>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
        </div>
    )
}

export default PostsCard;