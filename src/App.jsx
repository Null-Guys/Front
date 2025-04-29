import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
  const [hasUploaded, setHasUploaded] = useState(() => {
    return localStorage.getItem('uploadedCsv') === 'true';
  });

  // csv 업로드 상태가 바뀌면 감지하기 위한 이벤트 리스너
  useEffect(() => {
    const handleStorageChange = () => {
      setHasUploaded(localStorage.getItem('uploadedCsv') === 'true');
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              hasUploaded ? <Navigate to="/dashboard" /> : <UploadFile setHasUploaded={setHasUploaded} />
            }
          />
          <Route path="/dashboard" element={hasUploaded ? <DashBoard /> : <Navigate to="/" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
