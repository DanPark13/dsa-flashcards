// Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Switch, FormControlLabel } from '@mui/material';
import { Link } from 'react-router-dom';

interface HeaderProps {
    darkMode: boolean;
    onDarkModeToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, onDarkModeToggle }) => {
    return (
        <AppBar position="fixed" sx={{ backgroundColor: darkMode ? '#333' : 'white', color: darkMode ? 'white' : 'black' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography variant="h6" component="div">
                        <b>Data Structures & Algorithms</b>: All you Need to Know for Technical Interviews
                    </Typography>
                </Link>
                <div>
                    <FormControlLabel
                        control={<Switch color="default" checked={darkMode} onChange={onDarkModeToggle} />}
                        label="Dark Mode"
                    />
                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/about">
                        About
                    </Button>
                    <Button color="inherit" component={Link} to="/practice-resources">
                        Other Resources
                    </Button>
                    {/* <Button color="inherit" component={Link} to="/contact-us">
                        Contact Us
                    </Button> */}
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
