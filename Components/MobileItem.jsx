import React from "react";
import { Button, Card, CardContent, Grid } from "@mui/material";

export const MobileItem = ({ item }) => {
  return (
    <Grid item xs={3}>
      <Card>
        <CardContent>
          <img src={item.img} alt="" />
          <h3>{item.Brand}</h3>
          <h4>
            {item.model}-{item.Storage}
          </h4>
          <Button variant="contained">{item.Price}</Button>
        </CardContent>
      </Card>
    </Grid>
  );
};
