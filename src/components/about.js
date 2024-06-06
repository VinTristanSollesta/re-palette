import { Typography, Box } from "@mui/material";
import React from "react";
import styles from "../styles";

const About = () => {
  return (
    <Box sx={styles.containerBody}>
      <Box sx={styles.homeCardContainer}>
        <Typography variant="h2">About Re:Palette</Typography>

        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          risus a odio facilisis egestas. Sed imperdiet fringilla elit. Mauris
          vehicula velit at auctor tincidunt. Fusce pharetra elit in nibh
          pellentesque, eget efficitur orci facilisis. Etiam ut feugiat ipsum,
          in tincidunt neque. Aenean facilisis dolor vestibulum nunc accumsan
          condimentum. Quisque posuere ultrices justo, eu porta tortor facilisis
          quis. Phasellus feugiat elit nec volutpat laoreet. Nunc sed convallis
          felis. Phasellus sed ligula tortor. In a lorem molestie, finibus lacus
          non, fermentum metus. Donec a quam elit. Praesent sollicitudin ante eu
          lectus pulvinar, sed sodales dolor faucibus. Curabitur nec quam vel
          diam fringilla malesuada ac tristique ante.
        </Typography>
        <Typography>
          Integer vulputate, leo quis tincidunt fermentum, enim magna volutpat
          metus, quis semper sapien tortor eget augue. Pellentesque varius
          convallis lectus, et mollis justo semper et. Pellentesque vehicula
          dolor commodo feugiat rhoncus. Mauris dignissim, nibh in porttitor
          scelerisque, arcu massa dapibus ex, quis venenatis ligula dolor vitae
          ipsum. Maecenas vulputate leo et eros euismod sodales. Maecenas id
          dictum ligula, malesuada luctus enim. Morbi volutpat lobortis enim,
          vel imperdiet libero tincidunt in. Maecenas pharetra arcu et ultrices
          volutpat. Quisque consequat eros et felis pharetra aliquam id a massa.
          In eget lorem quis enim scelerisque suscipit.
        </Typography>
        <Typography>
          Morbi sagittis, nulla vitae auctor semper, tortor metus aliquam metus,
          in eleifend massa felis in purus. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Phasellus
          aliquet molestie tempus. Suspendisse sed odio quam. Phasellus id
          euismod odio. Vestibulum scelerisque mollis lobortis. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Suspendisse in tellus id tortor interdum vulputate non eu
          magna.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
