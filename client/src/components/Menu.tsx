import { useTheme } from '../theme-context/useTheme';
import BlogFindOne from './blog-section/BlogFindOne';

const Menu = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className="w-full px-10 mt-1 flex flex-row justify-between"
      style={{ background: theme === 'light' ? 'white' : 'black' }}
    >
      <a
        href=""
        className="bg-blue-300 rounded-xl p-2 "
        style={{ color: theme === 'light' ? 'black' : 'white' }}
      >
        Menu
      </a>
      <BlogFindOne />

      <button className="bg-sky-400 p-1 rounded-md" onClick={toggleTheme}>
        Theme
      </button>
    </div>
  );
};

export default Menu;
