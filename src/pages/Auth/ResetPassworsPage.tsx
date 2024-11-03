import React from 'react';
import {
  Box,
  Container,
  Paper,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';

import { CustomButton } from '../../components';
import { FormValues } from './types';
import { SubmitHandler, useForm } from 'react-hook-form';

const ResetPasswordPage: React.FC = () => {
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
            Password Recovery
          </Typography>
          <Typography align="left" p={'20px'}>
            To reset your password, enter your username
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
            <CustomButton type="submit" style={{ marginTop: '16px' }}>
              Reset password
            </CustomButton>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default ResetPasswordPage;
