import AppBar from '@mui/material/AppBar';
import Box from "@mui/material/Box";
import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';
import CVButton from './components/CVButton';
import theme from './components/theme';
import Logo from './img/logo.png';

const logoStyle = {
  borderWidth: 1,
  borderRadius: 50,
  height: '30px',
  width: '30px',
  marginRight: '10px'
};


const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button href="#" aria-label="Ida De Smet" sx={{color: theme.palette.primary.dark}}>
            <img src={Logo} alt='' style={logoStyle} />
            Ida De Smet
          </Button>
          <CVButton />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default Navbar;