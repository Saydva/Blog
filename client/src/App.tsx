import './App.css';

import { ThemeProvider } from './theme-context/ThemeProvider';

import Menu from './components/Menu';

function App() {
  return (
    <div
      className="flex justify-center flex-col items-center max-w-6xl m-auto"
      style={{ background: 'white' }}
    >
      <p>"697852661c0a4da9f8b25a79"</p>

      <ThemeProvider>
        <Menu />
      </ThemeProvider>
    </div>
  );
}

export default App;
