import { useEffect } from 'react';
import { useAxios } from './useAxios';
// import Blog from './components/Blog';
import './App.css';
import Menu from './components/Menu';
import { ThemeProvider } from './theme-context/ThemeProvider';

function App() {
  const { response, fetchData, loading, error } = useAxios('posts', 'GET');
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    console.log(response);
  }, []);

  return (
    <div
      className="flex justify-center flex-col items-center"
      style={{ background: 'white' }}
    >
      <ThemeProvider>
        <Menu />
      </ThemeProvider>

      <h1 className="mt-2 text-blue-700 ">Blog list</h1>

      {loading && <p>Nacitavam...</p>}
      {error && <p>Chyba: {error}</p>}
      {response && <p>{JSON.stringify(response)}</p>}
      {/* <Blog /> */}
    </div>
  );
}

export default App;
