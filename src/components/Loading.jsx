import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Laoding() {
  return (
    <Box sx={{ display: 'flex',height:'70vh',alignItems:'center' }}>
      <CircularProgress sx={{size:{md:70,xs:50}}} />
    </Box>
  );
}
