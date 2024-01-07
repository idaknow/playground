import LinkIcon from "@mui/icons-material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";

import CVButton from "./components/CVButton";
import theme from "./components/theme";
import Logo from "./img/logo.png";

const logoStyle = {
  borderWidth: 1,
  borderRadius: 50,
  height: "30px",
  width: "30px",
  marginRight: "10px",
};

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "15px" }}>
      <AppBar position="static">
        <Toolbar>
          <Button
            href="#"
            aria-label="Ida De Smet"
            sx={{ color: theme.palette.primary.dark }}
          >
            <img src={Logo} alt="" style={logoStyle} />
            Ida De Smet
          </Button>
          <Tooltip title="VIEW THIS SOURCE CODE">
            <IconButton
              id="source-code-button"
              aria-label="OPEN TAB TO SOURCE CODE"
              href="https://github.com/idaknow/playground"
              target="_blank"
              rel="noreferrer noopener"
              sx={{ marginLeft: "auto" }}
            >
              <LinkIcon />
            </IconButton>
          </Tooltip>
          <CVButton />
          <Tooltip title="VIEW LINKEDIN">
            <IconButton
              id="linkedin-button"
              aria-label="OPEN TAB TO LINKEDIN"
              href="https://www.linkedin.com/in/idakdesmet/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <LinkedInIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
