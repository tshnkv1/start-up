import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const HomePage: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: '83vh',
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.primary.main,
        padding: '20px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant="h2">Welcome to SStart</Typography>
      <Typography variant="h6" pt={'20px'} gutterBottom>
        Optimize your time easily
      </Typography>
    </Box>
  );
};

export default HomePage;
