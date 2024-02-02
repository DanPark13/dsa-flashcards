import './App.css'

import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import Header from './components/Header';
import Card from './components/Card';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
      setDarkMode(prevDarkMode => !prevDarkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
        primary: {
          main: darkMode ? '#FFF' : '#333',
        },
        background: {
          default: darkMode ? '#333' : '#FFF',
          paper: darkMode ? '#111' : '#FFF',
        },
        text: {
          primary: darkMode ? '#FFF' : '#333',
          },
        },
    });

  

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <Header darkMode={darkMode} onDarkModeToggle={handleDarkModeToggle} />
          <div style={{ padding: "40px", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Card darkMode={darkMode}/>
          </div>
        </div>
    </ThemeProvider>
  )
}

export default App;
