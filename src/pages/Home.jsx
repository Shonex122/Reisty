import React from "react";
import "./Home.css";
import NavBar from "../components/NavBar/NavBar";
import { Container, Typography } from "@mui/material";
import Hero from "../components/Hero/Hero";
import Sublink from "../components/Sublink/Sublink";
import Grid from "@mui/material/Grid";
import Rescard from "../components/Rescard/Rescard";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <Hero />
      <Container maxWidth={"xl"}>
        <Sublink />
      </Container>
      <Container sx={{ marginY: 5 }} maxWidth={"xl"}>
        <Typography variant="h5" component="h1" marginTop={3}>
          Featured restaurants
        </Typography>

        <Stack direction={"row"}>
          <Typography
            variant="variant"
            component="p"
            marginTop={0.5}
            marginBottom={2}
          >
            Discover the best restaurant in your best local area
          </Typography>
          <Link
            component="button"
            variant="body2"
            sx={{
              fontWeight: "700",
              marginLeft: "auto",
              color: "#ba172f",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "none",
              },
            }}
          >
            <Stack
              display={"flex"}
              sx={{
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Typography variant="subtitle" component="p">
                See more
              </Typography>
            </Stack>
          </Link>
        </Stack>

        <Grid container spacing={4}>
          <Rescard />
          <Rescard />
          <Rescard />
          <Rescard />
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
