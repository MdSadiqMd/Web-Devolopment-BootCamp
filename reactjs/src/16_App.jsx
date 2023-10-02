import React, { useEffect, useState } from 'react';
import { getPosts } from './16_index_API_Fetching';
import PostCard from './16_Components/PostCard';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => {
      setData(posts); 
    });
  }, []);

  return (
    <div className='App'>
      {data ? (
        <ul>
          {data.map((e) => (
            <PostCard title={e.title} body={e.body} />
          ))}
        </ul>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
}

export default App;
