import Typography from "@mui/material/Typography";
import { palette } from "./palette";

type ColorText = {
  text: string;
  color?: string;
};

type ColorTypographyProps = {
  coloredText: ColorText[];
  addEnterAfterEach?: boolean;
  sx?: Record<string, any>;
};

const ColorTypography = ({
  coloredText,
  addEnterAfterEach,
  sx,
}: ColorTypographyProps) => {
  return (
    <Typography variant="h2" sx={{ ...(sx ?? {}) }}>
      {coloredText.map(({ color, text }, index) => {
        return (
          <>
            <span style={{ color: color ?? palette.main }}>{text}</span>
            {addEnterAfterEach && index !== coloredText.length - 1 && <br />}
          </>
        );
      })}
    </Typography>
  );
};

export default ColorTypography;
