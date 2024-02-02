// Header.jsx
import React from 'react';
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    // Button,
    Switch, 
    FormControlLabel } from '@mui/material';

interface HeaderProps {
    darkMode: boolean;
    onDarkModeToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, onDarkModeToggle }) => {
    return (
        <AppBar position="fixed" sx={{ backgroundColor: darkMode ? '#333' : 'white', color: darkMode ? 'white' : 'black' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography variant="h6" component="div">
                        <b>Data Structures & Algorithms Essentials:</b> All You Need to Know for Technical Interviews
                    </Typography>
                </a>
                <div>
                    <FormControlLabel
                        control={<Switch color="default" checked={darkMode} onChange={onDarkModeToggle} />}
                        label="Dark Mode"
                    />
                    {/* <Button color="inherit">About</Button>
                    <Button color="inherit">Practice Resources</Button>
                    <Button color="inherit">Contact Us</Button> */}
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;