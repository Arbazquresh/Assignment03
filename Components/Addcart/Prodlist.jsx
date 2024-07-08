import { Button, Card, CardContent, Grid } from "@mui/material";
import axios from "axios";

import React, { useEffect, useState } from "react";

export const Prodlist = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  const getData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const addCart = ({ item }) => {
    setCart([...cart, item]);
    console.log("cart", cart);
  };

  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <img src={item.image} alt="" />
              <h1>{item.id}</h1>
              <h4>{item.description.slice(0, 20)}</h4>
              <h4>{item.category}</h4>
              <Button
                onClick={() => addCart(item)}
                variant="contained"
                fullWidth
              >
                Add to cart
              </Button>
              <br />
              <br />
              <Button variant="contained" color="success" fullWidth>
                Submit
              </Button>
              <h2>{cart.id}</h2>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
