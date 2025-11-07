import { useState } from 'react';
import { Typography, Grid, Card, CardContent, Button, Box, Chip, TextField, InputAdornment } from '@mui/material';
import { Search, TrendingUp, TrendingDown } from '@mui/icons-material';

function Marketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products] = useState([
    { name: 'Organic Tomatoes', price: '$4.50/kg', trend: 'up', change: '+12%', seller: 'Green Farm Co.', location: 'California' },
    { name: 'Fresh Wheat', price: '$2.20/kg', trend: 'down', change: '-5%', seller: 'Harvest Fields', location: 'Kansas' },
    { name: 'Sweet Corn', price: '$3.80/kg', trend: 'up', change: '+8%', seller: 'Sunny Acres', location: 'Iowa' },
    { name: 'Organic Carrots', price: '$3.20/kg', trend: 'up', change: '+15%', seller: 'Nature\'s Best', location: 'Oregon' },
    { name: 'Premium Rice', price: '$1.90/kg', trend: 'down', change: '-3%', seller: 'Rice Valley', location: 'Arkansas' },
    { name: 'Fresh Lettuce', price: '$2.70/kg', trend: 'up', change: '+6%', seller: 'Leafy Greens Inc.', location: 'Arizona' }
  ]);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom color="primary">
        🌾 Agricultural Marketplace
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        Buy and sell agricultural products directly with farmers
      </Typography>

      {/* Search */}
      <TextField
        fullWidth
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        sx={{ mb: 4, maxWidth: 400 }}
      />

      {/* Market Overview */}
      <Card sx={{ mb: 4, background: 'linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            📊 Today's Market Overview
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" color="success.main">156</Typography>
                <Typography variant="body2">Active Listings</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" color="primary.main">$2.8M</Typography>
                <Typography variant="body2">Daily Volume</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" color="warning.main">89</Typography>
                <Typography variant="body2">Active Traders</Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Products Grid */}
      <Grid container spacing={3}>
        {filteredProducts.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%', '&:hover': { boxShadow: 6 } }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                  <Typography variant="h6" component="h3">
                    {product.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {product.trend === 'up' ? (
                      <TrendingUp color="success" fontSize="small" />
                    ) : (
                      <TrendingDown color="error" fontSize="small" />
                    )}
                    <Typography 
                      variant="caption" 
                      color={product.trend === 'up' ? 'success.main' : 'error.main'}
                      sx={{ ml: 0.5 }}
                    >
                      {product.change}
                    </Typography>
                  </Box>
                </Box>
                
                <Typography variant="h5" color="primary" gutterBottom>
                  {product.price}
                </Typography>
                
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Seller: {product.seller}
                </Typography>
                
                <Chip 
                  label={product.location} 
                  size="small" 
                  variant="outlined" 
                  sx={{ mb: 2 }}
                />
                
                <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                  <Button variant="contained" size="small" fullWidth>
                    Buy Now
                  </Button>
                  <Button variant="outlined" size="small" fullWidth>
                    Contact
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Sell Your Products */}
      <Card sx={{ mt: 4, background: 'linear-gradient(135deg, #fff3e0 0%, #ffcc80 100%)' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            💰 Want to Sell Your Products?
          </Typography>
          <Typography variant="body1" paragraph>
            Join thousands of farmers already selling on our marketplace. Get better prices and reach more customers.
          </Typography>
          <Button variant="contained" color="secondary">
            Start Selling
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Marketplace;