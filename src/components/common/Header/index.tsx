import React from "react";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <AppBar
      position="static"
      className={styles.header}
      sx={{
        background:
          "linear-gradient(135deg, rgba(124, 58, 237, 0.95) 0%, rgba(99, 102, 241, 0.95) 100%)",
        backdropFilter: "blur(8px)",
        boxShadow: "0 4px 30px rgba(124, 58, 237, 0.15)",
        borderRadius: 0,
      }}
    >
      <Container>
        <Toolbar
          disableGutters
          sx={{
            height: "70px",
            gap: 2,
          }}
        >
          <LocalMoviesIcon
            sx={{
              fontSize: 32,
              color: "#fff",
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
            }}
          />
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              fontWeight: 700,
              background:
                "linear-gradient(to right, #fff, rgba(255,255,255,0.85))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textDecoration: "none",
              letterSpacing: "0.5px",
              display: "flex",
              alignItems: "center",
              gap: 1,
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-1px)",
                filter: "brightness(1.1)",
              },
            }}
          >
            Movie List
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 500,
              color: "rgba(255,255,255,0.9)",
              letterSpacing: "0.5px",
            }}
          >
            Semih Efe
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
