import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Ensure consistent usage of Grid2
import React from "react";
import styles from "../styles";
import Themes from "../themes";

const Sample = [
  {
    id: 0,
    text: "Hello",
  },
  {
    id: 1,
    text: "Hello",
  },
  {
    id: 2,
    text: "Hello",
  },
  {
    id: 3,
    text: "Hello",
  },
  {
    id: 4,
    text: "Hello",
  },
  {
    id: 5,
    text: "Hello",
  },
];

const Home = () => {
  return (
    <Grid
      container
      sx={{ paddingY: 10, paddingX: 10, width: "100%" }}
      spacing={2}
    >
      <Grid item sm={6} xs={12}>
        <Typography>Hi</Typography>
      </Grid>
      <Grid item sm={6} xs={12}>
        <Grid container sx={styles.homeCardContainer} spacing={2}>
          {Sample.map((item) => {
            return (
              <Grid item key={item.id} sx={styles.homeCard}>
                <Typography>{item.text}</Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
