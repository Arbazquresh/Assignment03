import React from "react";
import { Button, Card, CardContent, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Card sx={{ bgcolor: "gray" }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Link to="/">
              <Button variant="contained" color="warning" fullWidth>
                Home
              </Button>
            </Link>
          </Grid>

          <Grid item xs={2}>
            <Link to="counter">
              <Button variant="contained" color="warning" fullWidth>
                Counter
              </Button>
            </Link>
          </Grid>

          <Grid item xs={2}>
            <Link to="product">
              <Button variant="contained" color="warning" fullWidth>
                Product
              </Button>
            </Link>
          </Grid>

          <Grid item xs={2}>
            <Link to="service">
              <Button variant="contained" color="warning" fullWidth>
                Service
              </Button>
            </Link>
          </Grid>

          <Grid item xs={2}>
            <Link to="contact">
              <Button variant="contained" color="warning" fullWidth>
                Contact
              </Button>
            </Link>
          </Grid>

          <Grid item xs={2}>
            <Link to="mobile">
              <Button variant="contained" color="warning" fullWidth>
                Mobile
              </Button>
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
