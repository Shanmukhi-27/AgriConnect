import { useState } from 'react';
import { Typography, Grid, Card, CardContent, Button, Box, LinearProgress, Chip } from '@mui/material';
import { Dashboard as DashboardIcon, TrendingUp, Assignment, People } from '@mui/icons-material';

function Dashboard() {
  const [crops] = useState([
    { name: 'Tomatoes', progress: 75, status: 'Growing', nextAction: 'Water in 2 days' },
    { name: 'Wheat', progress: 45, status: 'Planted', nextAction: 'Fertilize next week' },
    { name: 'Corn', progress: 90, status: 'Ready', nextAction: 'Harvest now' }
  ]);

  const [weather] = useState({
    temp: '24°C',
    humidity: '65%',
    rainfall: '12mm',
    forecast: 'Sunny'
  });

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <DashboardIcon sx={{ mr: 2, fontSize: 32 }} color="primary" />
        <Typography variant="h4" component="h1">
          Farm Dashboard
        </Typography>
      </Box>

      {/* Weather Card */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Today's Weather
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="h4" color="primary">{weather.temp}</Typography>
                  <Typography variant="body2">Temperature</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h4" color="primary">{weather.humidity}</Typography>
                  <Typography variant="body2">Humidity</Typography>
                </Grid>
              </Grid>
              <Box sx={{ mt: 2 }}>
                <Chip label={weather.forecast} color="primary" />
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Rainfall: {weather.rainfall}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Quick Stats */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Farm Statistics
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" color="success.main">3</Typography>
                  <Typography variant="body2">Active Crops</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" color="warning.main">2.5</Typography>
                  <Typography variant="body2">Acres</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" color="error.main">1</Typography>
                  <Typography variant="body2">Alerts</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Crop Monitoring */}
      <Typography variant="h5" gutterBottom>
        Crop Monitoring
      </Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {crops.map((crop, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {crop.name}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Growth Progress</Typography>
                    <Typography variant="body2">{crop.progress}%</Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={crop.progress} 
                    color={crop.progress > 80 ? 'success' : crop.progress > 50 ? 'warning' : 'primary'}
                  />
                </Box>
                <Chip 
                  label={crop.status} 
                  color={crop.status === 'Ready' ? 'success' : crop.status === 'Growing' ? 'warning' : 'primary'}
                  size="small"
                  sx={{ mb: 2 }}
                />
                <Typography variant="body2" color="text.secondary">
                  Next: {crop.nextAction}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* AI Recommendations */}
      <Card sx={{ mb: 4, background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            🤖 AI Farm Assistant Recommendations
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" gutterBottom>
                • Your tomatoes need watering in 2 days based on soil moisture
              </Typography>
              <Typography variant="body1" gutterBottom>
                • Weather forecast shows rain next week - delay irrigation
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" gutterBottom>
                • Corn is ready for harvest - optimal market price detected
              </Typography>
              <Typography variant="body1" gutterBottom>
                • Consider planting soybeans in the empty plot next month
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Dashboard;