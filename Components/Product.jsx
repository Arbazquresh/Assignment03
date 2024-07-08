import React, { useState, useEffect } from "react";
import { Card, CardContent, Grid, TextField } from "@mui/material";
import { ProductItem } from "./ProductItem";
import axios from "axios";

export const Product = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField variant="outlined" label="Type Here" fullWidth />
          </Grid>
          <Grid container spacing={2}>
            {data.map((item) => (
              <Grid item xs={3}>
                <ProductItem item={item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
