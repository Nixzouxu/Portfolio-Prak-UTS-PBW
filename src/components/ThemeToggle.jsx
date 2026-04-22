import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiSun, HiMoon } from 'react-icons/hi';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Load theme dari localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      document.documentElement.classList.toggle('light-mode', savedTheme === 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('light-mode', !newTheme);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
      style={{
        background: isDark 
          ? 'rgba(0, 255, 231, 0.1)' 
          : 'rgba(139, 92, 246, 0.1)',
        border: isDark
          ? '1px solid rgba(0, 255, 231, 0.3)'
          : '1px solid rgba(139, 92, 246, 0.3)',
        boxShadow: isDark
          ? '0 0 20px rgba(0, 255, 231, 0.2)'
          : '0 0 20px rgba(139, 92, 246, 0.2)',
      }}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.5 }}
      >
        {isDark ? (
          <HiSun size={24} className="text-[#00FFE7]" />
        ) : (
          <HiMoon size={24} className="text-[#8B5CF6]" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;