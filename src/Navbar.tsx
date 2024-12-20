import LinkIcon from "@mui/icons-material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";

import { palette } from "./components/palette";

const cvUrl = `${process.env.REACT_APP_EXTRAS_URL}/cv/IDA_CV.pdf`;
const logoUrl = `${process.env.REACT_APP_EXTRAS_URL}/img/logo-without-text.png`;

const logoStyle = {
  borderWidth: 1,
  borderRadius: 50,
  height: "30px",
  width: "30px",
  marginRight: "10px",
};

const navbarStyle = {
  borderBottom: 3,
  borderBottomWidth: 3,
  borderBottomColor: palette.secondary,
  backgroundColor: palette.dark,
};

const iconButtonStyle = { color: palette.secondary };

const Navbar = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar position="static" sx={navbarStyle}>
        <Toolbar>
          <Button
            href="#"
            aria-label="Ida De Smet"
            sx={{ color: palette.main }}
          >
            <img src={logoUrl} alt="" style={logoStyle} />
            Ida De Smet
          </Button>
          <Tooltip title="VIEW THIS SOURCE CODE">
            <IconButton
              id="source-code-button"
              aria-label="OPEN TAB TO SOURCE CODE"
              href="https://github.com/idaknow/playground"
              target="_blank"
              rel="noreferrer noopener"
              sx={{ ...iconButtonStyle, marginLeft: "auto" }}
              size="large"
            >
              <LinkIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="DOWNLOAD CV AS PDF">
            <IconButton
              id="download-csv-button"
              aria-label="DOWNLOAD PDF"
              href={cvUrl}
              sx={iconButtonStyle}
              size="large"
            >
              <PictureAsPdfIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="VIEW LINKEDIN">
            <IconButton
              id="linkedin-button"
              aria-label="OPEN TAB TO LINKEDIN"
              href="https://www.linkedin.com/in/idakdesmet/"
              target="_blank"
              rel="noreferrer noopener"
              sx={iconButtonStyle}
              size="large"
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
