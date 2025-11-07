import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem,
  Box, Switch, FormControlLabel, Avatar, Drawer, List, ListItem,
  ListItemIcon, ListItemText, useMediaQuery, useTheme
} from '@mui/material';
import {
  Menu as MenuIcon, AccountCircle, Brightness4, Brightness7,
  Home, Info, Build, ContactMail, Dashboard, ExitToApp
} from '@mui/icons-material';
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
  const { state, dispatch } = useAppContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleProfileMenu = (event) => setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleThemeToggle = () => {
    dispatch({ type: 'SET_THEME', payload: state.theme === 'light' ? 'dark' : 'light' });
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    handleCloseMenu();
    navigate('/');
  };

  const menuItems = [
    { text: 'Home', path: '/', icon: <Home /> },
    { text: 'About', path: '/about', icon: <Info /> },
    { text: 'Services', path: '/services', icon: <Build /> },
    { text: 'Contact', path: '/contact', icon: <ContactMail /> },
    ...(state.user ? [{ text: 'Dashboard', path: '/dashboard', icon: <Dashboard /> }] : [])
  ];

  const drawer = (
    <Box sx={{ width: 250 }}>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              backgroundColor: location.pathname === item.path ? 'primary.light' : 'transparent',
              '&:hover': { backgroundColor: 'primary.light' }
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        <AppBar position="sticky" sx={{ 
          background: 'linear-gradient(135deg, #2e7d32 0%, #388e3c 50%, #4caf50 100%)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(46, 125, 50, 0.3)'
        }}>
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AgriConnect
          </Typography>

          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  component={Link}
                  to={item.path}
                  sx={{
                    backgroundColor: location.pathname === item.path ? 'rgba(255,255,255,0.1)' : 'transparent'
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}

          <FormControlLabel
            control={
              <Switch
                checked={state.theme === 'dark'}
                onChange={handleThemeToggle}
                icon={<Brightness7 />}
                checkedIcon={<Brightness4 />}
              />
            }
            label=""
            sx={{ ml: 1 }}
          />

          {state.user ? (
            <>
              <IconButton color="inherit" onClick={handleProfileMenu}>
                <Avatar sx={{ width: 32, height: 32 }}>
                  {state.user.name?.charAt(0) || 'U'}
                </Avatar>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
              >
                <MenuItem onClick={handleCloseMenu}>
                  <AccountCircle sx={{ mr: 1 }} />
                  Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <ExitToApp sx={{ mr: 1 }} />
                  Logout
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}
        </Toolbar>
        </AppBar>
      </motion.div>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;