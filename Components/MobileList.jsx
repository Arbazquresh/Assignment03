import React, { useEffect, useState } from "react";
import { MobileItem } from "./MobileItem";
import { Grid, TextField, Button } from "@mui/material";
import axios from "axios";

export const MobileList = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [datacopy, setDataCopy] = useState([]);

  const getData = async () => {
    const result = await axios.get("http://localhost:4040/mobile");
    setData(result.data);
    setDataCopy(result.data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const filt = datacopy.filter((item) =>
      item.Brand.toUpperCase().includes(text.toUpperCase())
    );
    setData(filt);
  }, [text]);
  return (
    <Grid container spacing={2}>
      <Grid sx={{ marginTop: 4 }} item xs={8}>
        <TextField
          onChange={(e) => setText(e.target.value)}
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={4}>
        <Button sx={{ height: 55, marginTop: 4 }} variant="contained" fullWidth>
          Add
        </Button>
      </Grid>

      { data.map((item) => {
        return <MobileItem item={item} />;
      })}
    </Grid>
  );
};
