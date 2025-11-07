import { Card, CardContent, Typography, Avatar, Rating, Box, Button, Chip } from '@mui/material';
import { LocationOn, Work } from '@mui/icons-material';
import { motion } from 'framer-motion';

const ExpertCard = ({ expert, onConnect }) => {
  return (
    <motion.div
      whileHover={{ 
        y: -10,
        rotateX: 5,
        scale: 1.02
      }}
      transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
      initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      style={{ perspective: 1000 }}
    >
      <Card sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        textAlign: 'center',
        background: 'linear-gradient(145deg, #ffffff 0%, #f0f7ff 100%)',
        border: '2px solid transparent',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': { 
          boxShadow: '0 25px 50px rgba(33, 150, 243, 0.2)',
          borderColor: 'primary.main',
          background: 'linear-gradient(145deg, #ffffff 0%, #e3f2fd 100%)'
        }
      }}>
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Avatar
            src={expert.avatar}
            sx={{ 
              width: 80, 
              height: 80, 
              mx: 'auto', 
              mb: 2,
              bgcolor: 'primary.main'
            }}
          >
            {expert.name.charAt(0)}
          </Avatar>
          
          <Typography variant="h6" component="h3" gutterBottom>
            {expert.name}
          </Typography>
          
          <Chip 
            label={expert.specialization}
            color="primary"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 1 }}>
            <Work fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {expert.experience} experience
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
            <LocationOn fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {expert.location}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
            <Rating value={expert.rating} precision={0.1} readOnly size="small" />
            <Typography variant="body2" color="text.secondary">
              ({expert.rating})
            </Typography>
          </Box>
          
          <Button 
            variant="contained" 
            fullWidth
            onClick={() => onConnect(expert)}
            sx={{ mt: 'auto' }}
          >
            Connect
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExpertCard;