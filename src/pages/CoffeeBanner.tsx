import { Box, Grid } from '@mui/material';
import StepCard from '../components/StepCard';
import Introduction from '../components/Introduction';

const CoffeeBanner = () => {
  return (
    <Box p={3}>
      <Introduction />
      <Grid container pt={4}>
        <Grid item xs={12} md={6}>
          <StepCard title="Step 1">Hello</StepCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CoffeeBanner;
