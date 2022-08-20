import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Sent: React.FC = () => {
  return (
    <Box sx={{ mx: "10vw" }}>
      <h2>Skickat!</h2>
      <p>
        Ditt meddelande har skickats till Johan och David. De kommer att läsa
        ditt mejl de kommande dagarna.
      </p>
      <Link to="/" style={{ marginTop: "10vw" }}>
        <Button variant="contained" color="primary">
          Gå tillbaks till PsycheDevs hemsida
        </Button>
      </Link>
    </Box>
  );
};

export default Sent;
