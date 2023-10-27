import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';

interface StepCardProps {
  title: string;
  children: React.ReactNode;
}

const StepCard: React.FC<StepCardProps> = ({ title, children }) => {
  const { palette } = useTheme();
  return (
    <Box borderRadius={'8px'} bgcolor={palette.common.white} my={4}>
      <Box
        p={2}
        bgcolor={palette.secondary.main}
        sx={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
      >
        <Typography variant="h3" color={palette.common.white}>
          {title}
        </Typography>
      </Box>
      <Box p={2}>{children}</Box>
    </Box>
  );
};

export default StepCard;
