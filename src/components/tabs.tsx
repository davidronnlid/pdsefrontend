import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "../css-modules/tabs.module.css";

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
          <Tab label="PsycheDevs Podcast" {...a11yProps(0)} />{" "}
          <Tab label="Om PsycheDevs" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <h2>Utveckla ditt psyke med Johan och David</h2>
        <h5>Introavsnitt av för PsycheDevs podcast:</h5>

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
          Möt Johan (psykologstudent) och David (läkarstudent). Studenter,
          vänner och "PsycheDevs" med aspirationen att skapa en plats där det
          fritt kan diskuteras allt som kan ingå i den mänskliga upplevelsen och
          hur man kan utveckla sitt psyke för att må och prestera bättre.
        </p>
        <p>
          Tillsammans hjälper vi varandra att bättre förstå och utveckla våra
          psyken. Psyket kan exempelvis innehålla fysiska, emotionella,
          intellektuella och spirituella komponenter. Detta är delar vi med stor
          nyfikenhet och ödmjukhet vill fördjupa oss i på PsycheDevs podcast.
          Välkommen!
        </p>
      </TabPanel>
    </Box>
  );
}
