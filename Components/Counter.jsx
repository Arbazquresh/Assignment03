import React, { useState } from "react";
import { Button, Card, CardContent, Grid } from "@mui/material";

export const Counter = () => {
  const [name, setName] = useState(0);

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Button
              onClick={() => setName(name + 5)}
              variant="contained"
              fullWidth
              disabled={name === 40}
            >
              Increment
            </Button>
          </Grid>
          <Grid item xs={4}></Grid>

          <Grid item xs={4}>
            <h1>{name}</h1>
          </Grid>
          <Grid item xs={4}></Grid>

          <Grid item xs={4}>
            <Button
              onClick={() => setName(name - 5)}
              variant="contained"
              fullWidth
              disabled={name === 5}
            >
              Decrement
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
