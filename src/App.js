import "./App.css";
import { Box } from "@mui/material";
import Header from "./header";
import Footer from "./footer";
import styles from "./styles";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./components/home";
import Talents from "./components/talents";
import About from "./components/about";
import Artists from "./components/artists";
import Contact from "./components/contact";
import TOS from "./components/tos";

//components

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/talents",
      element: <Talents />,
    },
    {
      path: "/artists",
      element: <Artists />,
    },
    {
      path: "/tos",
      element: <TOS />,
    },
  ]);

  return (
    <Box sx={{ height: "100vh", overflowY: "auto" }}>
      <Header />
      <Box sx={styles.containerBody}>
        <RouterProvider router={router} />

        <Footer />
      </Box>
    </Box>
  );
};

export default App;
