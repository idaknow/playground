import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';

import DataCV from '../cvs/DATA_IDA_CV.pdf';
import FullStackCV from '../cvs/FULL_STACK_IDA_CV.pdf';


const CVButton = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openPdfMenu = Boolean(anchorEl);

  const handlePdfMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePdfMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
        <Tooltip title="DOWNLOAD CV AS PDF">
        <IconButton
            id="download-csv-button"
            sx={{ marginLeft: "auto" }}
            aria-label="DOWNLOAD PDF"
            aria-controls={openPdfMenu ? 'pdf-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openPdfMenu ? 'true' : undefined}
            onClick={handlePdfMenuClick}>
            <PictureAsPdfIcon/>
        </IconButton>
        </Tooltip>
        <Menu 
        id="pdf-menu"
        anchorEl={anchorEl}
        open={openPdfMenu}
        onClose={handlePdfMenuClose}
        MenuListProps={{
            'aria-labelledby': 'download-csv-button',
        }}>
        <MenuItem>
            <a href={FullStackCV} download='IDA_CV.pdf' target='_blank' rel="noreferrer">
            Full Stack Software Role
            </a>
        </MenuItem>
        <MenuItem>
            <a href={DataCV} download='IDA_CV.pdf' target='_blank' rel="noreferrer">
            Data Engineering Role
            </a>
        </MenuItem>
        </Menu>
    </>
  )
}
export default CVButton;