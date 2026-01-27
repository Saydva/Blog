import { useTheme } from '../theme-context/useTheme';

const Menu = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className="w-full px-10 mt-1 flex flex-row justify-between"
      style={{ background: theme === 'light' ? 'white' : 'black' }}
    >
      <a
        href=""
        className="p-1"
        style={{ color: theme === 'light' ? 'black' : 'white' }}
      >
        Menu
      </a>
      <button className="bg-sky-400 p-1 rounded-md" onClick={toggleTheme}>
        Theme
      </button>
    </div>
  );
};

export default Menu;
