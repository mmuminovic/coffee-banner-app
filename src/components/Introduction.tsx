import { Box, Typography } from '@mui/material';

const Introduction = () => {
  return (
    <>
      <Box pb={1}>
        <Typography variant="h2">
          Welcome to the ThinkIT Coffee Banner Generator
        </Typography>
      </Box>
      <Box pb={1}>
        <Typography variant="body2">
          With this tool you are able to quickly craft your ideal coffee banner!
          Choose your blend and customize every detail for a a captivating brew
          display.
        </Typography>
      </Box>
      <Box pb={1}>
        <Typography variant="body1">
          Simply complete the three easy steps below, and see your preview
          update as you go. Then view, copy and paste.
        </Typography>
      </Box>
    </>
  );
};

export default Introduction;
