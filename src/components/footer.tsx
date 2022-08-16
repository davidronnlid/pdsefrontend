import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <footer>
      <Typography
        variant="body2"
        sx={{ color: "var(--text-color)", mx: "10vw", my: "4vw" }}
      >
        Hemsidan kodas med 💚 av{" "}
        <Link
          href="https://davidronnlidportfolio.netlify.app/"
          style={{
            color: "var(--text-color)",
            textDecoration: "underline",
          }}
        >
          <strong>David Rönnlid</strong>
        </Link>
      </Typography>
    </footer>
  );
};

export default Footer;
