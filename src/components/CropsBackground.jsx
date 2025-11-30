import { Box } from '@mui/material';

const CropsBackground = ({ children, variant = 'subtle' }) => {
  const getBackgroundStyle = () => {
    switch (variant) {
      case 'wheat':
        return {
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff8f00' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10-10c0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10-10 4.5-10 10z'/%3E%3C/g%3E%3C/svg%3E")
          `,
          backgroundColor: 'rgba(255, 248, 225, 0.3)'
        };
      case 'corn':
        return {
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232e7d32' fill-opacity='0.04'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='50' cy='10' r='2'/%3E%3Ccircle cx='10' cy='50' r='2'/%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3C/g%3E%3C/svg%3E")
          `,
          backgroundColor: 'rgba(232, 245, 233, 0.3)'
        };
      default:
        return {
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(46, 125, 50, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 143, 0, 0.08) 0%, transparent 50%),
            url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232e7d32' fill-opacity='0.02'%3E%3Cpath d='M40 40c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm20-20c0 11 9 20 20 20s20-9 20-20-9-20-20-20-20 9-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
          `,
          backgroundSize: '200px 200px, 150px 150px, 80px 80px'
        };
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        ...getBackgroundStyle(),
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(45deg, transparent 40%, rgba(46, 125, 50, 0.02) 50%, transparent 60%),
            linear-gradient(-45deg, transparent 40%, rgba(255, 143, 0, 0.02) 50%, transparent 60%)
          `,
          pointerEvents: 'none',
          zIndex: 0
        }
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {children}
      </Box>
    </Box>
  );
};

export default CropsBackground;