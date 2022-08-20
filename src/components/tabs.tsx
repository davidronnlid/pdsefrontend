import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "../css-modules/tabs.module.css";
import DavidOJohan from "../images/davidojohan.jpg";
import Link from "@mui/material/Link";
import ContactForm from "./contactForm";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function AboutTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // const handleStripeButtonClick = (event: React.SyntheticEvent, session: any) =>
  //   console.log(session);

  return (
    <Box className={styles.containerBox}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="product tabs"
          variant="scrollable"
          scrollButtons="auto"
          textColor="inherit"
        >
          <Tab label="PsycheDevs Podcast" {...a11yProps(0)} />
          <Tab label="Om PsycheDevs" {...a11yProps(1)} />
          <Tab label="Skriv till Johan och David" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <h2>Utveckla ditt psyke med Johan och David</h2>
        <h5>Introavsnitt för PsycheDevs podcast:</h5>

        <iframe
          src="https://www.youtube-nocookie.com/embed/60a7Ghv8qZQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.YTPlayer}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h2>Om PsycheDevs</h2>
        <p>
          Möt vännerna Johan (psykologstudent) och David (läkarstudent). Vi har
          aspirationen att skapa en plats där det fritt kan diskuteras allt som
          kan ingå i den mänskliga upplevelsen och hur man kan utveckla sitt
          psyke för att må och prestera bättre.
        </p>
        <p>
          Tillsammans hjälper vi varandra att bättre förstå och utveckla våra
          psyken. Psyket kan exempelvis innehålla fysiska, emotionella,
          intellektuella och spirituella komponenter. Detta är delar vi med stor
          nyfikenhet och ödmjukhet vill fördjupa oss i på{" "}
          <a href="https://www.youtube.com/channel/UCiAMrpObX21fkKh_rVuGHww">
            PsycheDevs podcast
          </a>
          . Välkommen! 🧠🚀
        </p>
        <figure>
          <img
            src={DavidOJohan}
            alt="David och Johan tillsammans i Johans cykelförråd"
            className={styles.davidOJohan}
          />{" "}
          <figcaption>
            På bilden har David och Johan precis bastat (som de brukar göra
            minst en gång i veckan tillsammans i Johans 90-graders bastu){" "}
          </figcaption>
        </figure>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ContactForm />
      </TabPanel>
    </Box>
  );
}
