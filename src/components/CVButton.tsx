import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";

import DataCV from "../cvs/IDA_DATA_CV.pdf";
import FullStackCV from "../cvs/IDA_FULL_STACK_CV.pdf";
import FileDownloadMenuItem from "./FileDownloadMenuItem";

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
          aria-label="DOWNLOAD PDF"
          aria-controls={openPdfMenu ? "pdf-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openPdfMenu ? "true" : undefined}
          onClick={handlePdfMenuClick}
        >
          <PictureAsPdfIcon />
        </IconButton>
      </Tooltip>
      <Menu
        id="pdf-menu"
        anchorEl={anchorEl}
        open={openPdfMenu}
        onClose={handlePdfMenuClose}
        MenuListProps={{
          "aria-labelledby": "download-csv-button",
        }}
      >
        <FileDownloadMenuItem
          name="Full Stack Software Role"
          href={FullStackCV}
          doc="IDA_CV.pdf"
        />
        <FileDownloadMenuItem
          name="Data Engineering Role"
          href={DataCV}
          doc="IDA_CV.pdf"
        />
      </Menu>
    </>
  );
};
export default CVButton;
