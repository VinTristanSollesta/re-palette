import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import styles from "../styles";
import Themes from "../themes";

import REPALETTELOGO from "../assets/REPALETTE-cropped.png";

const Header = () => {
  return (
    <Grid container sx={styles.header}>
      <Grid sm={6} height={"100%"}>
        <img src={REPALETTELOGO} height={"100%"} />
      </Grid>
      <Grid sm={2} sx={{ color: Themes.primary }}>
        Chan Chan
      </Grid>
      <Grid sm={2} sx={{ color: Themes.secondary }}>
        Chan Chan
      </Grid>
      <Grid sm={2} sx={{ color: Themes.tertiary }}>
        Chan Chan
      </Grid>
    </Grid>
  );
};

export default Header;
