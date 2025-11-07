import { Card, CardContent, CardActions, Typography, Button, Chip, Box } from '@mui/material';
import { AccessTime, Person } from '@mui/icons-material';
import { motion } from 'framer-motion';

const ResourceCard = ({ resource, onClick }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.03,
        y: -8,
        rotateY: 5
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      style={{ perspective: 1000 }}
    >
      <Card 
        sx={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          cursor: 'pointer',
          background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
          border: '1px solid transparent',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 20px 40px rgba(46, 125, 50, 0.15)',
            borderColor: 'primary.light',
            transform: 'translateZ(20px)'
          }
        }}
        onClick={() => onClick(resource)}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Box sx={{ mb: 2 }}>
            <Chip 
              label={resource.category} 
              size="small" 
              color="primary" 
              variant="outlined"
            />
          </Box>
          
          <Typography variant="h6" component="h3" gutterBottom>
            {resource.title}
          </Typography>
          
          <Typography variant="body2" color="text.secondary" paragraph>
            {resource.description}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Person fontSize="small" color="action" />
              <Typography variant="caption" color="text.secondary">
                {resource.author}
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <AccessTime fontSize="small" color="action" />
              <Typography variant="caption" color="text.secondary">
                {resource.readTime}
              </Typography>
            </Box>
          </Box>
        </CardContent>
        
        <CardActions>
          <Button size="small" color="primary">
            Read More
          </Button>
          <Typography variant="caption" color="text.secondary" sx={{ ml: 'auto' }}>
            {new Date(resource.date).toLocaleDateString()}
          </Typography>
        </CardActions>
      </Card>
    </motion.div>
  );
};

export default ResourceCard;