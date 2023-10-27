import { ThemeProvider } from '@mui/material';
import CoffeeBanner from './pages/CoffeeBanner';
import Header from './layout/Header';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <CoffeeBanner />
    </ThemeProvider>
  );
}

export default App;
