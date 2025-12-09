import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CoffeeIcon from "@mui/icons-material/Coffee";
import Button from "@mui/material/Button";

function Navbar() {
  return (
    <>
      <AppBar position="sticky" color="primary">
        <Container>
          <Toolbar>
            <CoffeeIcon />
            <Typography
              variant="h5"
              sx={{ flexGrow: 1, fontFamily: '"Eagle Lake",serif' }}
            >
              Coffee Shop
            </Typography>

            <Button color="inherit" href="#home">
              Home
            </Button>
            <Button color="inherit" href="#cofffee">
              Coffee
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Navbar;
