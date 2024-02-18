import { Grid } from "@mui/material";
import * as React from "react";
import BlogMenu from "./blogs/blogMenu";
import BlogMenuRith from "./blogs/blogMenuRith";
import BlogMenuLefst from "./blogs/blogMenuLefst";
import FooterFin from "./HomePage/HomeFooter";


export default function Blogs() {
  
  return (
    <div>
   <Grid container flexDirection={"row"}
    sx={{
    bgcolor:"#f0f0f0",
    minHeight:"100%"
   }} >

    <Grid item xs={0} sm={0} md={3} lg={3} xl={3} >
        <BlogMenuLefst/>
    </Grid>
    <Grid item xs={0} sm={0} md={6} lg={6} xl={6} >
        <BlogMenu/>
    </Grid>
    <Grid item xs={0} sm={0} md={3} lg={3} xl={3} >
        <BlogMenuRith/>
    </Grid>
   </Grid>
   <FooterFin  />
   </div>
  );
}