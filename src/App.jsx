import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button, Box, IconButton, Avatar, Menu, MenuItem } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Brightness4, Brightness7, AccountCircle } from '@mui/icons-material';
import { useState } from 'react';
import { AppProvider, useAppContext } from './context/AppContext';
import CropsBackground from './components/CropsBackground';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Marketplace from './pages/Marketplace';
import WeatherForecast from './pages/WeatherForecast';
import Login from './pages/Login';

function AppContent() {
  const { state, dispatch } = useAppContext();
  const [anchorEl, setAnchorEl] = useState(null);

  const theme = createTheme({
    palette: {
      mode: state.theme,
      primary: { main: '#2e7d32' },
      secondary: { main: '#ff8f00' },
      background: {
        default: '#ffffff',
        paper: '#ffffff'
      }
    }
  });

  const handleThemeToggle = () => {
    dispatch({ type: 'SET_THEME', payload: state.theme === 'light' ? 'dark' : 'light' });
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    handleMenuClose();
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CropsBackground>
        <Router>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                🌱 AgriConnect
              </Typography>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/about">About</Button>
              <Button color="inherit" component={Link} to="/services">Services</Button>
              {state.user && (
                <>
                  <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
                  <Button color="inherit" component={Link} to="/marketplace">Marketplace</Button>
                </>
              )}
              <Button color="inherit" component={Link} to="/weather">Weather</Button>
              <Button color="inherit" component={Link} to="/contact">Contact</Button>
              
              <IconButton color="inherit" onClick={handleThemeToggle}>
                {state.theme === 'dark' ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
              
              {state.user ? (
                <>
                  <IconButton color="inherit" onClick={handleMenuOpen}>
                    <AccountCircle />
                  </IconButton>
                  <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </>
              ) : (
                <Button color="inherit" component={Link} to="/login">Login</Button>
              )}
            </Toolbar>
          </AppBar>
          
          <Container sx={{ py: 4 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/login" element={<Login />} />
              {state.user ? (
                <>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/marketplace" element={<Marketplace />} />
                </>
              ) : (
                <>
                  <Route path="/dashboard" element={<Login />} />
                  <Route path="/marketplace" element={<Login />} />
                </>
              )}
              <Route path="/weather" element={<WeatherForecast />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Container>
        </Router>
      </CropsBackground>
    </ThemeProvider>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;