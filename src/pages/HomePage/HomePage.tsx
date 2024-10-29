import React from 'react';
import { Box, Typography } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Typography variant="h2" color="white">
        Welcome to SStart
      </Typography>
    </Box>
  );
};

export default HomePage;
