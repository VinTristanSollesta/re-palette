import Themes from "./themes";

const styles = {
  containerBody: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    overflowY: "auto",
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
    backgroundColor: `${Themes.secondary}`,
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
    paddingX: 10,
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
  footer: {
    display: "flex",
    backgroundColor: Themes.primary,
    height: "30vh",
    marginTop: "auto",
    width: "100%",
    justifyContent: "center", // Align items horizontally if needed
    alignItems: "center", // Align items vertically if needed
  },
};

export default styles;
