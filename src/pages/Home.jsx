import { Box, Typography, Grid, Card, CardContent, Button, Fade, Slide } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Home() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Box>
      <Fade in={checked} timeout={1000}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h2" gutterBottom>
            Welcome to AgriConnect
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Empowering farmers through technology and innovation
          </Typography>
        </Box>
      </Fade>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Slide direction="up" in={checked} timeout={800}>
            <Card sx={{ '&:hover': { transform: 'translateY(-4px)', transition: '0.3s' } }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Weather Forecast
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Get real-time weather updates and forecasts for your farm
                </Typography>
                <Button component={Link} to="/weather" variant="contained" sx={{ mt: 2 }}>
                  View Weather
                </Button>
              </CardContent>
            </Card>
          </Slide>
        </Grid>

        <Grid item xs={12} md={4}>
          <Slide direction="up" in={checked} timeout={1000}>
            <Card sx={{ '&:hover': { transform: 'translateY(-4px)', transition: '0.3s' } }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Marketplace
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Buy and sell agricultural products directly
                </Typography>
                <Button component={Link} to="/marketplace" variant="contained" sx={{ mt: 2 }}>
                  Visit Marketplace
                </Button>
              </CardContent>
            </Card>
          </Slide>
        </Grid>

        <Grid item xs={12} md={4}>
          <Slide direction="up" in={checked} timeout={1200}>
            <Card sx={{ '&:hover': { transform: 'translateY(-4px)', transition: '0.3s' } }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Dashboard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Monitor your farm's performance and analytics
                </Typography>
                <Button component={Link} to="/dashboard" variant="contained" sx={{ mt: 2 }}>
                  Open Dashboard
                </Button>
              </CardContent>
            </Card>
          </Slide>
        </Grid>
      </Grid>
    </Box>
  );
}

