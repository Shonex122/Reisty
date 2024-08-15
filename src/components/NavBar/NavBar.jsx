import React from "react";
import "./NavBar.css";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import logo_Icon from "../../assests/logo (1).svg";
import InputBase from "@mui/material/InputBase";
import { Button, Stack, Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Link from "@mui/material/Link";

function NavBar() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "30ch",
        "&:focus": {
          width: "30ch",
        },
      },
    },
  }));

  return (
    <div className="navbar">
      <AppBar
        position="sticky"
        variant="outlined"
        style={{ background: "white" }}
      >
        <Toolbar>
          <Typography sx={{ marginRight: "28px" }} variant="h4">
            <img src={logo_Icon} alt="" width={79} />
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon
                sx={{
                  color: "gray",
                  position: "absolute",
                  top: "10px",
                  left: "30px",
                  fontSize: 35,
                }}
              />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search restaraunts cusines…"
              inputProps={{ "aria-label": "search" }}
              sx={{
                border: "1px solid blue",
                marginLeft: "20px",
                width: "400px",
                height: "50px",
                borderRadius: "8px",
                position: "relative",
                color: "gray",
              }}
            />
          </Search>

          <Link
            component="button"
            variant="body2"
            onClick={() => console.error("testing")}
            sx={{
              marginLeft: "400px",
              color: "#ba172f",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            For Restaurants
          </Link>

          <Stack direction="row" spacing={5} sx={{ marginLeft: " auto" }}>
            <Button
              size="small"
              sx={{
                marginLeft: "auto",
                background: "none",
                color: "black",
                "&:hover": {
                  backgroundColor: "none",
                  color: "#ba172f",
                  border: "1px solid #f1f5f9",
                },
                borderRadius: "8px",
                padding: "15px 20px",
                textTransform: "lowercase",
              }}
              variant="outlined"
            >
              Log in
            </Button>
            <Button
              sx={{
                marginLeft: "40px",
                textTransform: "lowercase",
                padding: "15px 20px",
                borderRadius: "8px",
                color: "white",
                backgroundColor: "#ba172f",
                "&:hover": {
                  backgroundColor: "#ba172f",
                },
              }}
              variant="outlined"
            >
              Sign up
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
