import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun size={20} className="text-grand-gold" />
      ) : (
        <Moon size={20} className="text-grand-dark dark:text-white" />
      )}
    </button>
  );
};

export default ThemeToggle;


