import React from "react";
import { Button, Card, CardContent, Grid, Rating } from "@mui/material";

export const ProductItem = ({ item }) => {
  return (
    <Card>
      <CardContent>
        <Grid item xs={3}>
          <img src={item.image} alt="" />
          <p>{item.category}</p>
          <h4>{item.price}</h4>
          <Rating value={item.rating.rate} />
          <p>{item.description.slice(0, 20)}</p>
          <Button variant="contained" fullWidth>
            buy
          </Button>
          <br /> <br />
          <Button variant="contained" fullWidth color="success">
            Cart
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
};
