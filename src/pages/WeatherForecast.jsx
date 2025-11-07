import { useState } from 'react';
import { Typography, Grid, Card, CardContent, Box, Chip, Alert } from '@mui/material';
import { WbSunny, Cloud, Grain, Opacity, Air, Thermostat } from '@mui/icons-material';

function WeatherForecast() {
  const [forecast] = useState([
    { day: 'Today', temp: '24°C', condition: 'Sunny', humidity: '65%', wind: '12 km/h', icon: <WbSunny /> },
    { day: 'Tomorrow', temp: '22°C', condition: 'Cloudy', humidity: '70%', wind: '8 km/h', icon: <Cloud /> },
    { day: 'Wed', temp: '26°C', condition: 'Sunny', humidity: '60%', wind: '15 km/h', icon: <WbSunny /> },
    { day: 'Thu', temp: '20°C', condition: 'Rainy', humidity: '85%', wind: '20 km/h', icon: <Grain /> },
    { day: 'Fri', temp: '23°C', condition: 'Cloudy', humidity: '75%', wind: '10 km/h', icon: <Cloud /> }
  ]);

  const [alerts] = useState([
    { type: 'warning', message: 'Heavy rain expected Thursday - protect outdoor crops' },
    { type: 'info', message: 'Perfect conditions for planting this weekend' },
    { type: 'success', message: 'Optimal harvesting weather for the next 3 days' }
  ]);

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom color="primary">
        🌤️ Weather Forecast
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        Agricultural weather insights for your farm
      </Typography>

      {/* Weather Alerts */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          🚨 Farm Alerts
        </Typography>
        {alerts.map((alert, index) => (
          <Alert severity={alert.type} sx={{ mb: 1 }} key={index}>
            {alert.message}
          </Alert>
        ))}
      </Box>

      {/* 5-Day Forecast */}
      <Typography variant="h6" gutterBottom>
        📅 5-Day Forecast
      </Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {forecast.map((day, index) => (
          <Grid item xs={12} sm={6} md={2.4} key={index}>
            <Card sx={{ 
              textAlign: 'center', 
              background: index === 0 ? 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)' : 'white',
              border: index === 0 ? '2px solid #2196f3' : 'none'
            }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {day.day}
                </Typography>
                <Box sx={{ color: 'primary.main', mb: 1, fontSize: 40 }}>
                  {day.icon}
                </Box>
                <Typography variant="h5" color="primary" gutterBottom>
                  {day.temp}
                </Typography>
                <Chip 
                  label={day.condition} 
                  size="small" 
                  color={day.condition === 'Sunny' ? 'warning' : day.condition === 'Rainy' ? 'info' : 'default'}
                  sx={{ mb: 2 }}
                />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                  <Opacity fontSize="small" sx={{ mr: 0.5 }} />
                  <Typography variant="body2">{day.humidity}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Air fontSize="small" sx={{ mr: 0.5 }} />
                  <Typography variant="body2">{day.wind}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Detailed Weather Info */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                🌡️ Temperature Trends
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" color="error.main">28°C</Typography>
                  <Typography variant="body2">High</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" color="primary.main">24°C</Typography>
                  <Typography variant="body2">Current</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" color="info.main">18°C</Typography>
                  <Typography variant="body2">Low</Typography>
                </Box>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Ideal temperature range for most crops: 18-25°C
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                💧 Irrigation Recommendations
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1" gutterBottom>
                  • <strong>Today:</strong> No irrigation needed - sufficient soil moisture
                </Typography>
                <Typography variant="body1" gutterBottom>
                  • <strong>Tomorrow:</strong> Light watering recommended for seedlings
                </Typography>
                <Typography variant="body1" gutterBottom>
                  • <strong>Thursday:</strong> Skip irrigation - rain expected
                </Typography>
                <Typography variant="body1">
                  • <strong>Weekend:</strong> Resume normal watering schedule
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Farming Tips */}
      <Card sx={{ mt: 4, background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            🌱 Weather-Based Farming Tips
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" gutterBottom>
                • Perfect conditions for outdoor planting this week
              </Typography>
              <Typography variant="body1" gutterBottom>
                • Cover sensitive plants before Thursday's rain
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" gutterBottom>
                • Harvest ready crops before the rain arrives
              </Typography>
              <Typography variant="body1" gutterBottom>
                • Good time for soil preparation after the rain
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

export default WeatherForecast;