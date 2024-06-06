import { borderRadius } from "@mui/system";
import Themes from "./themes";

const styles = {
  containerBody: {
    display: "flex",
    height: "100vh",
    overflowY: "auto",
    paddingX: 10,
    paddingY: 5,
    overflowY: "none",
  },
  header: {
    display: "flex",
    paddingX: 10,
    paddingY: 2,
    height: "10vh",
    alignItems: "center",
    position: "fixed",
    width: "100%",
  },
  headerNavigation: {
    borderRadius: 15,
    backgroundColor: `${Themes.gray}`,
    textAlign: "center",
  },
  headerNavigationItem: {
    padding: 2,
    color: Themes.dark,
  },
  homeContainer: {
    padding: 5,
    // backgroundColor: Themes.primary,
  },

  homeCardContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  homeCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "240px", // Updated width to 300px
    height: "300px", // Keeping the height as 300px
    backgroundColor: "#f0f0f0",
    margin: "10px",
    borderRadius: "8px", // Optional: Adding some border-radius for better appearance
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Optional: Adding some shadow for better appearance
  },

  paragraphText: {
    textColor: Themes.dark,
  },

  mobileMenu: {
    backgroundColor: Themes.gray,
  },
  carousel: {
    display: "flex",
    height: "720px",
    width: "300px",
    backgroundColor: Themes.secondary, // temporary
  },
};

export default styles;
