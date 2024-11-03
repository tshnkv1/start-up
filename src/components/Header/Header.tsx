import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Routes } from '../../routes/routes';
import { company } from '../../constants/index';
import { toggleTheme } from '../../store/reducers/themeSlice';
import { ThemeToggle } from '../index';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const dispatch = useDispatch();
  const theme = useTheme();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        height: '6vh',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          noWrap
          sx={{ color: theme.palette.primary.main }}
        >
          <Link to={Routes.HOME}>{company.name}</Link>
        </Typography>
        <div>
          <Button
            color="inherit"
            component={Link}
            to={Routes.ABOUT_DEVELOPER}
            sx={{ color: theme.palette.primary.main }}
          >
            About Developer
          </Button>
          <ThemeToggle toggleTheme={() => dispatch(toggleTheme())} />
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleMenuOpen}
            aria-controls="user-menu"
            aria-haspopup="true"
          >
            <AccountCircleIcon sx={{ color: theme.palette.primary.main }} />
          </IconButton>

          <Menu
            id="user-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={handleMenuClose}>
              <Button color="inherit" component={Link} to={Routes.LOGIN}>
                Log In
              </Button>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Button color="inherit" component={Link} to={Routes.REGISTER}>
                Sign Up
              </Button>
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
