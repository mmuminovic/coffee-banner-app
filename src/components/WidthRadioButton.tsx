import { Box, FormControlLabel, Radio } from '@mui/material';
import React from 'react';
import { BannerWidth } from '../types/Coffee';

interface WidthRadioButtonProps {
  label: string;
  value: BannerWidth;
  width: string;
}

const WidthRadioButton: React.FC<WidthRadioButtonProps> = ({
  value,
  label,
  width,
}) => {
  return (
    <Box
      width={width}
      height={'100px'}
      bgcolor={'#ccc'}
      display={'flex'}
      alignItems={'center'}
    >
      <FormControlLabel value={value} control={<Radio />} label={label} />
    </Box>
  );
};

export default WidthRadioButton;
