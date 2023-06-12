import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Footer from './components/Footer';
import Home from './Pages/Home';
import CustomNavbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Box width="400px" sx={{ width: { xl: '100%' } }} m="auto">
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;
