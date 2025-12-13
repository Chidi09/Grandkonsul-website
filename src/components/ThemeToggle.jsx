import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = ({ variant = 'floating' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  // Floating variant (bottom-right)
  if (variant === 'floating') {
    return (
      <button 
        onClick={toggleTheme}
        className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full bg-grand-gold text-white shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center hover:shadow-xl hover:shadow-grand-gold/50"
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDark ? (
          <Sun size={24} />
        ) : (
          <Moon size={24} />
        )}
      </button>
    );
  }

  // Inline variant (for navbar)
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


