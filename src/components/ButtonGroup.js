import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
// hiii
export default function VariantButtonGroup(props) {
  const { setSelectedCategory } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        '& > *': {
          marginLeft: '0px',
          marginBottom: '20px',
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button
          color="success"
          sx={{ fontSize: '20px' }}
          onClick={() => setSelectedCategory('foodbank')}
        >
          Foodbanks
        </Button>
        <Button
          color="success"
          sx={{ fontSize: '20px' }}
          onClick={() => setSelectedCategory('grocery')}
        >
          Groceries
        </Button>
        <Button
          color="success"
          sx={{ fontSize: '20px' }}
          onClick={() => setSelectedCategory('restaurant')}
        >
          Restaurants
        </Button>
      </ButtonGroup>
    </Box>
  );
}
