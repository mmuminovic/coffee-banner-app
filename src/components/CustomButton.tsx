import React from 'react';
import { Button, SxProps, Typography, useTheme } from '@mui/material';

interface CustomButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'text' | 'outlined' | 'contained';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  sx?: SxProps;
  color?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  text,
  color,
  ...rest
}) => {
  const { palette } = useTheme();
  return (
    <Button variant="contained" onClick={onClick} {...rest}>
      <Typography variant="caption" color={color || palette.common.white}>
        {text}
      </Typography>
    </Button>
  );
};

export default CustomButton;
