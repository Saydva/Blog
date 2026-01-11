import { useEffect } from 'react';
import Blog from './components/Blog';
import { useAxios } from './useAxios';
import './App.css';

function App() {
  const { response, fetchData, loading } = useAxios('/test-api', 'GET');
  useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="mt-2 text-blue-700 ">Hello world</h1>
      <Blog />
      <div>{loading ? 'Loadin...' : null}</div>
      <p>{JSON.stringify(response)}</p>
    </div>
  );
}

export default App;
