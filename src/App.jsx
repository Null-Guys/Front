import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Test from './Test';
import DashBoard from './Pages/DashBoard/DashBoard';
import UploadFile from './Pages/UploadFile/UploadFile';

const theme = createTheme({
  typography: {
    fontFamily: 'Pretendard, sans-serif',
  },
  palette: {
    text: {
      primary: '#333333',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/upload" element={<UploadFile />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
