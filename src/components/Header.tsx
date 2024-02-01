import { AppBar, Toolbar, Typography} from '@mui/material';

const Header = () => {
  return (
      <AppBar position="fixed" sx={{ backgroundColor: 'black' }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
              <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Typography variant="h6" component="div">
                      <b>Data Structures & Algorithms Flashcards:</b> All You Need to Know for Coding Interviews
                  </Typography>
              </a>
              {/* <div>
                  <Button color="inherit">About</Button>
                  <Button color="inherit">Practicing Problems</Button>
                  <Button color="inherit">Other Useful Resources</Button>
                  <Button color="inherit">Contact Us</Button>
              </div> */}
          </Toolbar>
      </AppBar>
  );
};

export default Header;