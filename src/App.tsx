import "./App.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AboutTabs from "./components/tabs";
import PsycheDevsLogoNoBg from "./images/PSYCHEDEVS_SE_NO_BG.png";
import styles from "./css-modules/logo.module.css";
import Footer from "./components/footer";

const App = () => {
  return (
    <Box>
      <img
        src={PsycheDevsLogoNoBg}
        alt="PsycheDevs logo"
        className={styles.logo}
      />
      <AboutTabs />
      <Footer />
    </Box>
  );
};

export default App;
