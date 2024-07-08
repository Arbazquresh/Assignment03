import React, { useState } from "react";
import { prod } from "./Proddata";
import { Card, CardContent, Grid } from "@mui/material";

export const Colours = () => {
  const [data, setData] = useState(prod);

  return (
    <Grid container spacing={3}>
      {data.map((item) => (
        <Grid item xs={item.xs}>
          <Card sx={{ bgcolor: item.clr }}>
            <CardContent></CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
