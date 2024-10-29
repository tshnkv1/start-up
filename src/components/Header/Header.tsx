import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

import { Routes } from '../../routes/routes';
import { company } from '../../constants/index';

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" noWrap>
          <Link to={Routes.HOME}>{company.name}</Link>
        </Typography>
        <div>
          <Button color="inherit" component={Link} to={Routes.LOGIN}>
            Login
          </Button>
          <Button color="inherit" component={Link} to={Routes.REGISTER}>
            Register
          </Button>
          <Button color="inherit" component={Link} to={Routes.RESET_PASSWORD}>
            Reset Password
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
