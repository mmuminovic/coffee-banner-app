import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  CircularProgress,
  Select,
  SelectChangeEvent,
  MenuItem,
  Stack,
} from '@mui/material';
import React from 'react';
import StepCard from '../components/StepCard';
import { CoffeeType, Coffee } from '../types/Coffee';
import CustomButton from '../components/CustomButton';

interface StepOneProps {
  coffeeType: CoffeeType;
  setCoffeeType: (data: CoffeeType) => void;
  isFetching: boolean;
  selectedCoffeeId: string;
  setSelectedCoffeeId: (data: string) => void;
  data: Coffee[];
  submit: (step: number) => void;
}

const StepOne: React.FC<StepOneProps> = ({
  coffeeType,
  setCoffeeType,
  isFetching,
  selectedCoffeeId,
  setSelectedCoffeeId,
  data,
  submit,
}) => {
  return (
    <StepCard title="1. Select your coffee">
      <FormControl>
        <RadioGroup
          value={coffeeType}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setCoffeeType(e.target.value as CoffeeType);
          }}
        >
          <FormControlLabel
            value={CoffeeType.HOT}
            control={<Radio />}
            label="Hot"
          />
          <FormControlLabel
            value={CoffeeType.ICED}
            control={<Radio />}
            label="Iced"
          />
        </RadioGroup>
      </FormControl>
      {isFetching ? (
        <Box>
          <CircularProgress />
        </Box>
      ) : (
        <FormControl fullWidth>
          <Select
            id="coffee"
            value={selectedCoffeeId}
            onChange={(e: SelectChangeEvent) => {
              setSelectedCoffeeId(e.target.value);
            }}
          >
            {data.map((coffee: Coffee) => (
              <MenuItem value={`${coffee.id}`}>{coffee.title}</MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      <Stack direction={'row'} justifyContent={'flex-end'} py={2}>
        <CustomButton text={'Next step'} onClick={() => submit(1)} />
      </Stack>
    </StepCard>
  );
};

export default StepOne;
