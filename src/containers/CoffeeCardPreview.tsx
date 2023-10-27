import { Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import { Coffee } from '../types/Coffee';

interface CoffeeCardPreviewProps {
  selectedCoffee: Partial<Coffee>;
  htmlCode: string;
}

const CoffeeCardPreview: React.FC<CoffeeCardPreviewProps> = ({
  selectedCoffee,
  htmlCode,
}) => {
  const { palette } = useTheme();

  if (!selectedCoffee.title) {
    return <></>;
  }

  return (
    <Stack p={4}>
      <Stack p={2} bgcolor={palette.common.white} borderRadius={'8px'}>
        <Typography variant="body1" color={palette.primary.main}>
          Preview
        </Typography>
        <div dangerouslySetInnerHTML={{ __html: htmlCode }}></div>
        {/* <Stack border={`1px solid ${palette.text.disabled}`} mt={2}>
          <Stack
            width="100%"
            bgcolor={palette.secondary.main}
            height={'50px'}
            justifyContent={'center'}
            px={2}
          >
            <Typography variant="body2" color={palette.common.white}>
              {selectedCoffee.title}
            </Typography>
          </Stack>
          <Stack direction={'row'} justifyContent={'space-between'} p={2}>
            <Box flex={3} p={1}>
              <Typography variant="body2">
                {selectedCoffee.description}
              </Typography>
            </Box>
            <Box flex={1}>
              <img src={selectedCoffee.image} width={'100%'} />
            </Box>
          </Stack>
        </Stack> */}
      </Stack>
    </Stack>
  );
};

export default CoffeeCardPreview;
