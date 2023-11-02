import { useGetPostsQuery } from "./redux/api";

const App = () => {
  const { isLoading, isError, isSuccess, data, error } = useGetPostsQuery({});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (isSuccess) {
    return (
      <div>
        {data.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    );
  }

  return <div>No data to display.</div>;
};

export default App;
