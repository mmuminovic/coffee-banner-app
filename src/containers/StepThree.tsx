import { Repeat, Code } from '@mui/icons-material';
import { Stack, InputLabel, TextField, useTheme } from '@mui/material';
import React from 'react';
import CustomButton from '../components/CustomButton';
import StepCard from '../components/StepCard';
import { Coffee } from '../types/Coffee';

interface StepThreeProps {
  selectedCoffee: Partial<Coffee>;
  setSelectedCoffee: React.Dispatch<React.SetStateAction<Partial<Coffee>>>;
  resetForm: () => void;
  showCode: () => void;
}

const StepThree: React.FC<StepThreeProps> = ({
  selectedCoffee,
  setSelectedCoffee,
  resetForm,
  showCode,
}) => {
  const { palette } = useTheme();
  return (
    <StepCard title="Step 3">
      <Stack>
        <InputLabel>Title</InputLabel>
        <TextField
          value={selectedCoffee.title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSelectedCoffee((prev: Partial<Coffee>) => ({
              ...prev,
              title: e.target.value,
            }))
          }
        />
        <InputLabel>Description</InputLabel>
        <TextField
          value={selectedCoffee.description}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSelectedCoffee((prev: Partial<Coffee>) => ({
              ...prev,
              description: e.target.value,
            }))
          }
        />
      </Stack>
      <Stack direction={'row'} justifyContent={'space-between'} py={2}>
        <CustomButton
          text={'Start over'}
          variant="text"
          endIcon={<Repeat />}
          onClick={() => {
            resetForm();
          }}
          color={palette.primary.main}
        />
        <CustomButton
          text={'View and copy code'}
          startIcon={<Code htmlColor={palette.common.white} />}
          onClick={() => showCode()}
        />
      </Stack>
    </StepCard>
  );
};

export default StepThree;
