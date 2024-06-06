import { Typography, Box } from "@mui/material";
import React from "react";

//import styles and themes
import styles from "../styles";
import Themes from "../themes";

const Images = [
  {
    name: "",
    path: "",
    alt: "",
  },
  {
    name: "",
    path: "",
    alt: "",
  },
  {
    name: "",
    path: "",
    alt: "",
  },
];

const Carousel = () => {
  Images.map((item) => {
    return <Box>{item.name}</Box>;
  });
};

const Talents = () => {
  return (
    <Box sx={styles.containerBody}>
      <Box sx={{ display: "flex" }}>
        <Typography>Talents</Typography>
      </Box>
      <Box>{Carousel}</Box>
    </Box>
  );
};

export default Talents;
