import "./App.css";
import Box from "@mui/material/Box";
import AboutTabs from "./components/tabs";
import PsycheDevsLogoNoBg from "./images/PSYCHEDEVS_SE_NO_BG.png";
import styles from "./css-modules/logo.module.css";
import Footer from "./components/footer";
import ContactForm from "../src/components/contactForm";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Sent from "./components/sent";

const App = () => {
  return (
    <Router>
      <Box>
        <Link to="/">
          <img
            src={PsycheDevsLogoNoBg}
            alt="PsycheDevs logo"
            className={styles.logo}
          />
        </Link>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <AboutTabs />
              </>
            }
          />
          <Route path="/skickat" element={<Sent />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;
