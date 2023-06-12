import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function VariantButtonGroup() {
  return (
    <Box
      sx={{
        
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        '& > *': {
          marginLeft:'100px',

          
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group">
        <Button color="success" sx={{ fontSize: '20px' }}>Foodbanks</Button>
        <Button color="success" sx={{ fontSize: '20px' }}>Groceries</Button>
        <Button color="success" sx={{ fontSize: '20px' }}>Restaurants</Button>
      </ButtonGroup>
    </Box>
  );
}