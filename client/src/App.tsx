import { useEffect } from 'react';
import { useAxios } from './useAxios';
// import Blog from './components/Blog';
import './App.css';

function App() {
  const { response, fetchData, loading, error } = useAxios('test-api', 'GET');
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    console.log(response);
  }, [response]);

  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="mt-2 text-blue-700 ">Blog list</h1>

      {loading && <p>Nacitavam...</p>}
      {error && <p>Chyba: {error}</p>}
      {response && <p>{JSON.stringify(response)}</p>}
      {/* <Blog /> */}
    </div>
  );
}

export default App;
