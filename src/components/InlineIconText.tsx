import { ReactNode } from "react";
import { palette } from "./palette";

type InlineIconProp = {
  children: ReactNode;
  text: string;
};

const inlineIconStyle = {
  display: "flex",
  alignItems: "center",
  color: palette.secondary,
};

const InlineIconText = ({ text, children }: InlineIconProp) => {
  return (
    <span style={inlineIconStyle}>
      {children} <span style={{ marginLeft: "5px" }}>{text}</span>
    </span>
  );
};

export default InlineIconText;
