import PostsCard from "./components/PostsCard";
import { useGetPostsQuery } from "./redux/api";

const App = () => {
  const { isLoading, isError, isSuccess, data } = useGetPostsQuery(undefined);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }  

  if (isSuccess) {
    return (
      <div>
        {data?.map((post: Post) => (
          <PostsCard key={post.id} post={post} />
        ))}
      </div>
    );
  }
  

  return <div>No data to display.</div>;
};

export default App;
