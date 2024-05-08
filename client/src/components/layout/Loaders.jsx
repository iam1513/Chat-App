import { Grid, Skeleton, Stack } from "@mui/material";
import React from "react";

export const LayoutLoader = () => {
  return (
    <Grid container height={"calc(100vh - 4rem)"} spacing={"1rem"}>
      <Grid
        item
        xs={4}
        md={3}
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
        }}
        height={"100%"}
        // bgcolor="orange"
      >
        <Skeleton variant="rectangular" height={"100vh"} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        lg={6}
        height={"100%"}
        // bgcolor="primary.main"
      >
        <Stack spacing={"1rem"}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton key={index} variant="rounded" height={"5rem"} />
          ))}
        </Stack>
      </Grid>
      <Grid
        item
        md={4}
        lg={3}
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
          padding: "2rem",
          bgcolor: "rgba(0,0,0,0.85",
        }}
        height={"100%"}
        // bgcolor="red"
      >
        <Skeleton variant="rectangular" height={"100vh"} />
      </Grid>
    </Grid>
  );
};
