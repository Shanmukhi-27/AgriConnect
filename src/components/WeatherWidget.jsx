import { Card, CardContent, Typography, Box } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { WbSunny } from '@mui/icons-material';
import { mockWeatherData } from '../data/mockData';

const WeatherWidget = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Card sx={{ 
        height: '100%',
        background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #90caf9 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
          animation: 'shimmer 3s infinite'
        },
        '@keyframes shimmer': {
          '0%': { left: '-100%' },
          '100%': { left: '100%' }
        }
      }}>
        <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <WbSunny color="primary" />
          <Typography variant="h6" component="h3">
            Weather Forecast
          </Typography>
        </Box>
        
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={mockWeatherData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip 
              formatter={(value, name) => [
                `${value}${name === 'temp' ? '°C' : '%'}`,
                name === 'temp' ? 'Temperature' : 'Humidity'
              ]}
            />
            <Line 
              type="monotone" 
              dataKey="temp" 
              stroke="#2196f3" 
              strokeWidth={2}
              dot={{ fill: '#2196f3' }}
            />
            <Line 
              type="monotone" 
              dataKey="humidity" 
              stroke="#4caf50" 
              strokeWidth={2}
              dot={{ fill: '#4caf50' }}
            />
          </LineChart>
        </ResponsiveContainer>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              Avg Temp
            </Typography>
            <Typography variant="h6" color="primary">
              24°C
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              Humidity
            </Typography>
            <Typography variant="h6" color="success.main">
              69%
            </Typography>
          </Box>
        </Box>
      </CardContent>
      </Card>
    </motion.div>
  );
};

export default WeatherWidget;