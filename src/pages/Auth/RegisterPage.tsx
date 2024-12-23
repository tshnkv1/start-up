import React from 'react';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Box,
  Container,
  Paper,
  Typography,
  useTheme,
  TextField,
} from '@mui/material';

import { CustomButton } from '../../components';
import { Routes } from '../../routes/routes';

import { FormValues } from './types';

const RegisterPage: React.FC = () => {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const emailValue = watch('email') || '';
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
            Registration
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              {...register('email', {
                required: 'Enter your email adress',
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
              value={emailValue.toLowerCase()}
              onChange={(e) => setValue('email', e.target.value)}
            />
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
            <CustomButton disabled type="submit" style={{ marginTop: '16px' }}>
              Sign Up
            </CustomButton>
          </form>
          <Typography
            sx={{ color: theme.palette.primary.main, paddingTop: '20px' }}
          >
            Do you already have an account?
          </Typography>
          <Link to={Routes.LOGIN} style={{ textDecoration: 'none' }}>
            <CustomButton style={{ marginTop: '16px' }}>Log In</CustomButton>
          </Link>
        </Paper>
      </Container>
    </Box>
  );
};

export default RegisterPage;
