import { Box, Stack, Typography, useTheme } from '@mui/material';
import Logo from '../assets/logo.png';

const Header = () => {
  const { palette } = useTheme();
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      bgcolor={palette.secondary.main}
      p={3}
      sx={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
    >
      <Box>
        <img src={Logo} alt="Logo" height="50px" />
      </Box>
      <Typography color={palette.common.white}>
        Coffee Banner Generator
      </Typography>
    </Stack>
  );
};

export default Header;
