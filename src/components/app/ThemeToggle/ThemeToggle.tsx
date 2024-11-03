import React from 'react';
import { useTheme } from '@mui/material';
import Switch from '@mui/material/Switch';

interface IThemeToggleProps {
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<IThemeToggleProps> = ({ toggleTheme }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return <Switch checked={isDarkMode} onChange={toggleTheme} />;
};

export default ThemeToggle;
