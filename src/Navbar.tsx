import EmailIcon from '@mui/icons-material/Email';
import AppBar from '@mui/material/AppBar';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';

import CVButton from './components/CVButton';


const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" aria-label="Ida De Smet" href="#">Ida De Smet</Button>
          
          <CVButton />
          <Tooltip title="HIRE ME">
            <IconButton sx={{ marginRight: "0" }} href="#contact" aria-label="HIRE ME">
              <EmailIcon/>
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default Navbar;