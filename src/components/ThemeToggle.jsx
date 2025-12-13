import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button 
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-[100] bg-grand-green dark:bg-grand-gold text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 border-2 border-transparent hover:border-white"
      aria-label="Toggle Theme"
    >
      {isDark ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
};

export default ThemeToggle;


