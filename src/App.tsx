import { ThemeProvider } from '@mui/material';
import CoffeeBanner from './pages/CoffeeBanner';
import Header from './layout/Header';
import theme from './styles/theme';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Header />
        <CoffeeBanner />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
