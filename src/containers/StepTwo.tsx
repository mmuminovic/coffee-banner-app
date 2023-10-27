import {
  FormControl,
  RadioGroup,
  Stack,
  FormControlLabel,
  Radio,
  TextField,
} from '@mui/material';
import React from 'react';
import StepCard from '../components/StepCard';
import WidthRadioButton from '../components/WidthRadioButton';
import { BannerWidth } from '../types/Coffee';
import CustomButton from '../components/CustomButton';

interface StepOneProps {
  width: string;
  setWidth: (data: BannerWidth) => void;
  customWidth: string;
  setCustomWidth: (data: string) => void;
  submit: (step: number) => void;
}

const StepTwo: React.FC<StepOneProps> = ({
  width,
  setWidth,
  customWidth,
  setCustomWidth,
  submit,
}) => {
  return (
    <StepCard title="2. Step">
      <FormControl fullWidth>
        <RadioGroup
          value={width}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setWidth(e.target.value as BannerWidth);
          }}
          sx={{
            '& > MuiFormControlLabel-root': {
              backgroundColor: '#ccc',
            },
          }}
        >
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            width={'100%'}
            gap={1}
          >
            <WidthRadioButton
              label={'160px'}
              width={'160px'}
              value={BannerWidth.width160px}
            />
            <WidthRadioButton
              label={'300px'}
              value={BannerWidth.width300px}
              width={'300px'}
            />
            <WidthRadioButton
              label={'100%'}
              width={'100%'}
              value={BannerWidth.width100}
            />
          </Stack>
          <Stack direction={'row'} pt={2}>
            <FormControlLabel
              value={BannerWidth.custom}
              control={<Radio />}
              label={'Custom'}
            />
            <TextField
              value={customWidth}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setCustomWidth(e.target.value);
              }}
              disabled={width !== BannerWidth.custom}
            />
          </Stack>
        </RadioGroup>
      </FormControl>
      <Stack direction={'row'} justifyContent={'flex-end'} py={2}>
        <CustomButton text={'Next step'} onClick={() => submit(2)} />
      </Stack>
    </StepCard>
  );
};

export default StepTwo;
