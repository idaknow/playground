import Grid from "@mui/material/Grid";

import { palette } from "../components/palette";
import ColorTypography from "./ColorTypography";

const stackBlitzUrl =
  "https://stackblitz.com/github/idaknow/playground?title=Idas playground&view=editor";

const CodeSource = () => {
  return (
    <div
      style={{
        height: "auto",
        backgroundColor: palette.dark,
      }}
    >
      <Grid
        container
        spacing={1}
        style={{
          color: palette.main,
        }}
      >
        <Grid item xs={12} style={{ margin: "80px" }}>
          <ColorTypography
            coloredText={[
              { text: "View this " },
              { text: "source code", color: palette.secondary },
            ]}
            sx={{ textAlign: "center", paddingBottom: "100px" }}
          ></ColorTypography>
          <iframe
            src={stackBlitzUrl}
            title="StackBlitz this website"
            style={{
              height: "auto",
              width: "95%",
              minHeight: "500px",
              marginBottom: "100px",
            }}
          ></iframe>
        </Grid>
      </Grid>
    </div>
  );
};

export default CodeSource;
