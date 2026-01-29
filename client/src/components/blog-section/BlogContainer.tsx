import Blog from './Blog';
import { useAxiosPost } from '../../useAxios';
import { useEffect, useState } from 'react';

const BlogContainer = () => {
  const { response, getAllPosts, loading, error } = useAxiosPost();
  const [recall, setRecall] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        await getAllPosts();
      } catch (e: any) {
        console.error('Error fetching posts (caught):', e);
      }
    })();
  }, [getAllPosts]);

  useEffect(() => {
    if (!error) return;
    console.error('Error fetching posts:', error);
  }, [error]);

  useEffect(() => {
    if (!error) return;
    const timer = setTimeout(() => {
      console.log('Retrying to fetch posts...');
      setRecall((r) => r + 1);
      getAllPosts();
    }, 10000);

    return () => clearTimeout(timer);
  }, [error, getAllPosts]);

  if (error != null) {
    console.log(error);

    setTimeout(() => {
      console.log('Retrying to fetch posts...');
      setRecall(recall + 1);

      getAllPosts();
    }, 10000);
  }

  return (
    <div className="sm:mx-10 mx-2 my-5 p-5 flex flex-col gap-3">
      <h2>Blog Section</h2>
      <p>{recall}</p>
      {loading && <p>Nacitavam...</p>}
      {error && <p>Chyba: {error}</p>}
      {response && response.map((data) => <Blog key={data.slug} {...data} />)}
    </div>
  );
};

export default BlogContainer;
