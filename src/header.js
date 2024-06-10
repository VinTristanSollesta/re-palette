import React, { useState } from "react";
import {
  Link,
  Typography,
  IconButton,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Unstable_Grid2";
import styles from "./styles";
import REPALETTELOGO from "./assets/rp-2x2.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleMenu = (open) => (event) => {
    setMenuOpen(open);
  };

  const menuItems = [
    { text: "Home", href: "/home" },
    { text: "About", href: "/about" },
    { text: "Talents", href: "/talents" },
    { text: "Artists", href: "/artists" },
  ];

  return (
    <Grid container sx={styles.header}>
      <Grid sm={6} xs={4} height={"100%"}>
        <Link href="/">
          <img
            src={REPALETTELOGO}
            height={"100%"}
            style={{
              filter: "drop-shadow(4px 4px 2px #222)",
              ":hover": "height:100px",
            }}
          />
        </Link>
      </Grid>
      {!isXs && (
        <Grid container sm={6} xs={8} sx={styles.headerNavigation}>
          {menuItems.map((item, index) => (
            <Grid key={index} sm={3} sx={styles.headerNavigationItem}>
              <Link href={item.href} color="inherit" underline="hover">
                <Typography variant="h6">{item.text}</Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
      )}
      {isXs && (
        <Grid
          container
          sm={6}
          xs={8}
          justifyContent="flex-end"
          alignItems="center"
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu(!menuOpen)}
            sx={{ fontSize: "2rem" }} // Adjust the size here
          >
            <MenuIcon sx={{ fontSize: "2rem" }} />
          </IconButton>
        </Grid>
      )}
      {isXs && menuOpen && (
        <Grid container xs={12} sx={styles.mobileMenu}>
          <List sx={{ width: "100%" }}>
            {menuItems.map((item, index) => (
              <ListItem button key={index} onClick={toggleMenu(false)}>
                <Link
                  href={item.href}
                  color="inherit"
                  underline="hover"
                  width={"inherit"}
                >
                  <Typography variant="h6">{item.text}</Typography>
                </Link>
              </ListItem>
            ))}
          </List>
        </Grid>
      )}
    </Grid>
  );
};

export default Header;
