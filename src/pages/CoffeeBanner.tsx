import {
  Box,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import StepCard from '../components/StepCard';
import Introduction from '../components/Introduction';
import { useState } from 'react';
import { Coffee, CoffeeType } from '../types/Coffee';
import { useQuery } from 'react-query';
import { getCoffees } from '../services/coffeeApi';

const CoffeeBanner = () => {
  const [coffeeType, setCoffeeType] = useState<CoffeeType>(CoffeeType.HOT);
  const [selectedCoffeeId, setSelectedCoffeeId] = useState<
    string | undefined
  >();

  const { data = [], isFetching } = useQuery<Coffee[]>(
    ['coffee', coffeeType],
    () => getCoffees(coffeeType),
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      onSuccess: (data) => {
        setSelectedCoffeeId(`${data[0].id}`);
      },
    }
  );

  return (
    <Box p={3}>
      <Introduction />
      <Grid container pt={4}>
        <Grid item xs={12} md={6}>
          <StepCard title="Step 1">
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
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
          </StepCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CoffeeBanner;
