import { FormEvent, useState } from "react";
import PostsCard from "./components/PostsCard";
import { useGetPostsQuery, useNewPostMutation } from "./redux/api";

const App = () => {
  const { isLoading, isError, isSuccess, data } = useGetPostsQuery(undefined);
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [newPost] = useNewPostMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const post: Post = {
      title,
      body,
      userId: Math.random() * 1000,
      id: Math.random() * 1000,
    };
    newPost(post);
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" value={body} onChange={(e) => setBody(e.target.value)} />
        <button type="submit">Add</button>
      </form>

      {isSuccess ? (
        <div>
          {data?.map((i) => (
            <PostsCard key={i.id} post={i} />
          ))}
        </div>
      ) : (
        <div>No data to display.</div>
      )}
    </div>
  );
};

export default App;
