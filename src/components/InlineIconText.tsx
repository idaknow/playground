import { ReactNode } from "react";

type InlineIconProp = {
  children: ReactNode;
  text: string;
};

const inlineIconStyle = {
  display: "flex",
  alignItems: "center",
};

const InlineIconText = ({ text, children }: InlineIconProp) => {
  return (
    <span style={inlineIconStyle}>
      {children} {text}
    </span>
  );
};

export default InlineIconText;
