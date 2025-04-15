import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Test from './Test';
import DashBoard from './DashBoard.jsx/DashBoard';

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
      <DashBoard />
      {/* <Test /> */}
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </ThemeProvider>
  );
}

export default App;
