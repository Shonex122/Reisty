import React from "react";
import Paper from "@mui/material/Paper";
import "./Rescard.css";
import Grid from "@mui/material/Grid";
import img from "../../assests/img2.webp";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
      ],
    },
  },
});

function Rescard() {
  return (
    <>
      <Grid item xs={3}>
        <ThemeProvider theme={theme}>
          <Paper elevation={3}>
            <img className="img" src={img} alt="img" />
            <Box padding={2}>
              <Typography variant="subtitle1" component="h2">
                Gossip Kitchen and Bar
              </Typography>
              <Typography variant="body2" component="p">
                Lagos, Nigeria
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
                marginTop={2}
              >
                <Rating
                  name="read-only"
                  value={5}
                  readOnly
                  size="small"
                  style={{ color: "#ba172f" }}
                />
                <Typography
                  variant="body2"
                  component="p"
                  marginLeft={0.5}
                  marginTop={0.5}
                >
                  5.0
                </Typography>
              </Box>
            </Box>
          </Paper>
        </ThemeProvider>
      </Grid>
    </>
  );
}

export default Rescard;
