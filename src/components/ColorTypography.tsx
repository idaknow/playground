import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
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

export const ColorTypography = ({
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

export const TypewriterColorTypography = ({
  coloredText,
  addEnterAfterEach,
  sx,
}: ColorTypographyProps) => {
  const [arrayIndex, setArrayIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [newColorText, setNewColorText] = useState<ColorText[]>([]);

  const getNewColorText = (prevColorText: ColorText[]) => {
    const newText = coloredText[arrayIndex].text[textIndex];
    if (textIndex === 0) {
      return [...prevColorText, { ...coloredText[arrayIndex], text: newText }];
    }
    const lastElement = prevColorText.pop();
    return [
      ...prevColorText,
      {
        ...lastElement,
        text: lastElement ? lastElement.text + newText : "",
      },
    ];
  };

  useEffect(() => {
    if (arrayIndex < coloredText.length) {
      const timeout = setTimeout(() => {
        setNewColorText(getNewColorText);

        if (coloredText[arrayIndex].text.length === textIndex + 1) {
          setTextIndex(0);
          setArrayIndex((prevArrayIndex) => prevArrayIndex + 1);
        } else {
          setTextIndex((prevTextIndex) => prevTextIndex + 1);
        }
      }, 100);
      return () => clearTimeout(timeout);
    }
  });

  return (
    <ColorTypography
      coloredText={newColorText}
      addEnterAfterEach={addEnterAfterEach}
      sx={sx}
    />
  );
};
