import { useSelector, useDispatch } from 'react-redux';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { toggleDarkMode } from '../store/reducers/themeReducer';

function ThemeToggle() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => dispatch(toggleDarkMode())}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <FaSun className="text-yellow-400 w-5 h-5" />
      ) : (
        <FaMoon className="text-gray-600 w-5 h-5" />
      )}
    </motion.button>
  );
}

export default ThemeToggle;