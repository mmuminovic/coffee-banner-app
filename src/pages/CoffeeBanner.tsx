import { Box, Grid, useTheme } from '@mui/material';
import Introduction from '../components/Introduction';
import { useEffect, useMemo, useState } from 'react';
import { BannerWidth, Coffee, CoffeeType } from '../types/Coffee';
import { useQuery } from 'react-query';
import { getCoffees } from '../services/coffeeApi';
import StepOne from '../containers/StepOne';
import StepTwo from '../containers/StepTwo';
import StepThree from '../containers/StepThree';
import CoffeeCardPreview from '../containers/CoffeeCardPreview';

const CoffeeBanner = () => {
  const { palette } = useTheme();
  const [step, setStep] = useState<number>(1);
  const [width, setWidth] = useState<BannerWidth>(BannerWidth.width100);
  const [customWidth, setCustomWidth] = useState<string>('');
  const [coffeeType, setCoffeeType] = useState<CoffeeType>(CoffeeType.HOT);
  const [selectedCoffeeId, setSelectedCoffeeId] = useState<string>('');
  const [selectedCoffee, setSelectedCoffee] = useState<Partial<Coffee>>({});

  const htmlCode = useMemo(() => {
    if (Object.keys(selectedCoffee).length) {
      return `
      <div style="border: 1px solid ${
        palette.text.disabled
      }; margin-top: 16px; width: ${
        width !== BannerWidth.custom ? width : customWidth
      }">
        <div style="width: 100%; background-color:  ${
          palette.secondary.main
        }; height: 50px; display: flex; align-items: center; padding: 8px;">
          <p style="font-size: 18px; color: #fff;">${selectedCoffee.title}</p>
        </div>
        <div style="display: flex; flex-direction: row; justify-content: space-between; padding: 8px;">
          <div style="flex: 2; padding: 8px;">
            <p style="font-size: 14px;">${selectedCoffee.description}</p>
          </div>
          <div style="flex: 1;">
            <img src="${selectedCoffee.image}" style="width: 100%;" />
          </div>
        </div>
      </div>
      `;
    } else {
      return `<div></div>`;
    }
  }, [selectedCoffee, palette, width, customWidth]);

  const {
    data = [],
    isFetching,
    refetch,
  } = useQuery<Coffee[]>(['coffee', coffeeType], () => getCoffees(coffeeType), {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    onSuccess: (data) => {
      setSelectedCoffeeId(`${data[0].id}`);
    },
  });

  useEffect(() => {
    if (selectedCoffeeId && data) {
      setSelectedCoffee(
        data.find((c) => c.id === parseInt(selectedCoffeeId)) || {}
      );
    } else {
      setSelectedCoffee({});
    }
  }, [selectedCoffeeId, data]);

  const nextStepHandler = (currentStep: number) => {
    setStep(currentStep + 1);
  };

  const resetForm = () => {
    setStep(1);
    setWidth(BannerWidth.custom);
    setCustomWidth('');
    setSelectedCoffeeId('');
    setCoffeeType(CoffeeType.HOT);
    refetch();
  };

  return (
    <Box p={3}>
      <Introduction />
      <Grid container>
        <Grid item xs={12} md={7}>
          <StepOne
            isFetching={isFetching}
            coffeeType={coffeeType}
            setCoffeeType={setCoffeeType}
            selectedCoffeeId={selectedCoffeeId}
            setSelectedCoffeeId={setSelectedCoffeeId}
            data={data}
            submit={nextStepHandler}
          />
          {step >= 2 && (
            <StepTwo
              width={width}
              setWidth={setWidth}
              customWidth={customWidth}
              setCustomWidth={setCustomWidth}
              submit={nextStepHandler}
            />
          )}
          {step >= 3 && (
            <StepThree
              setSelectedCoffee={setSelectedCoffee}
              selectedCoffee={selectedCoffee}
              showCode={() => {}}
              resetForm={resetForm}
            />
          )}
        </Grid>
        <Grid xs={12} md={5}>
          <CoffeeCardPreview
            selectedCoffee={selectedCoffee}
            htmlCode={htmlCode}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CoffeeBanner;
