import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        height: '6vh',
        display: 'flex',
        justifyContent: 'center',
        py: 2,
        px: 2,
        mt: 'auto',
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* <Container maxWidth="lg"> */}
      <Typography variant="body1" sx={{ color: theme.palette.primary.main }}>
        © 2024 SStart
      </Typography>
      {/* </Container>. */}
    </Box>
  );
};

export default Footer;
