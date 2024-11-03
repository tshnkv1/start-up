import React from 'react';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Box,
  Container,
  Paper,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';

import { Routes } from '../../routes/routes';
import { CustomButton } from '../../components';
import { FormValues } from './types';

const LoginPage: React.FC = () => {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const userNameValue = watch('username') || '';

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <Box
      sx={{
        height: '83vh',
        padding: '20px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper
          elevation={3}
          style={{
            padding: '20px',
            backgroundColor: theme.palette.background.default,
          }}
        >
          <Typography variant="h5" align="center">
            Log in to the system
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Username"
              type="username"
              fullWidth
              margin="normal"
              {...register('username', {
                required: 'Enter your username',
              })}
              error={!!errors.username}
              helperText={errors.username?.message}
              value={userNameValue.toLowerCase()}
              onChange={(e) => setValue('username', e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              {...register('password', { required: 'Enter your password' })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Typography pb={'20px'} align="right">
              <Link to={Routes.RESET_PASSWORD}>Forgot your password?</Link>
            </Typography>
            <CustomButton type="submit" style={{ marginTop: '16px' }}>
              Log In
            </CustomButton>
          </form>
          <Typography
            sx={{ color: theme.palette.primary.main, paddingTop: '20px' }}
          >
            Don't you have an account yet?
          </Typography>
          <Link to={Routes.REGISTER} style={{ textDecoration: 'none' }}>
            <CustomButton style={{ marginTop: '16px' }}>Sign Up</CustomButton>
          </Link>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginPage;
