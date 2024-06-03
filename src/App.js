import "./App.css";
import { Box } from "@mui/material";
import Header from "./components/header";
import styles from "./styles";
import { createBrowserRouter } from "react-router-dom";

//components

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: "",
    },
    {
      path: "/",
      element: "",
    },
    {
      path: "/",
      element: "",
    },
  ]);

  return (
    <Box>
      <Header />
      <Box sx={styles.container}></Box>
    </Box>
  );
};

export default App;
