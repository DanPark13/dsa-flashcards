import './App.css'

import { useState } from 'react';
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'

import Header from './components/Header';
import Card from './components/Card';
import AboutPage from './AboutPage';
import PracticeResourcesPage from './PracticeResourcesPage';
import ContactUsPage from './ContactUsPage';

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
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Header darkMode={darkMode} onDarkModeToggle={handleDarkModeToggle} />}/>
                <Route index element={<Card darkMode={darkMode}/>}/>
                <Route path="about" element={<AboutPage />} />
                <Route path="contact-us" element={<ContactUsPage />} />
                <Route path="practice-resources" element={<PracticeResourcesPage />} />
            </Routes>
          </BrowserRouter>
        </div>
    </ThemeProvider>
  );
}

export default App;
