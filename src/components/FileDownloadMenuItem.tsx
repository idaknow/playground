import FileDownloadIcon from "@mui/icons-material/FileDownload";
import MenuItem from "@mui/material/MenuItem";

import theme from "./theme";

const linkStyle = {
  color: theme.palette.primary.dark,
  textDecoration: "none",
};

type Props = {
  name: string;
  href: string;
  doc: string;
};

const FileDownloadMenuItem = ({ name, href, doc }: Props) => {
  return (
    <MenuItem>
      <FileDownloadIcon />
      <a
        href={href}
        download={doc}
        target="_blank"
        rel="noreferrer noopener"
        style={linkStyle}
      >
        {name}
      </a>
    </MenuItem>
  );
};
export default FileDownloadMenuItem;
