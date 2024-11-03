import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface ICustomButtonProps extends ButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary';
  type?: 'submit';
  onClick?: () => void;
}

const CustomButton: React.FC<ICustomButtonProps> = ({
  variant = 'contained',
  color = 'primary',
  onClick,
  children,
  ...rest
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      fullWidth
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
