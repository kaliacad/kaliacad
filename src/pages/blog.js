import { Grid } from "@mui/material";
import * as React from "react";
import BlogMenu from "./blogs/blogMenu";
// import BlogMenuRith from "./blogs/blogMenuRith";
// import BlogMenuLefst from "./blogs/blogMenuLefst";
import FooterFin from "./HomePage/HomeFooter";
// import AppBarBlog from "./blogs/appBarBlog";
// import { navigate } from "gatsby";
import Header from "../navigation/Header";

export default function Blogs() {
  const [seach, setSeach] = React.useState("");

  return (
    <div
      style={{
        bgcolor: "#f0f0f0",
        // marginTop: 80,
      }}
    >
      <Header />
      {/*
       <AppBarBlog nav={navigate} seach={seach} setSeach={setSeach} />
      */}
      <Grid
        container
        flexDirection={"row"}
        sx={{
          bgcolor: "#f0f0f0",
          minHeight: "100%",
        }}
        // mt={50}
        pt={1}
      >
        <Grid item xs={0} sm={0} md={3} lg={3} xl={3}>
          {/*
            <BlogMenuLefst />
            */}
        </Grid>
        <Grid item xs={0} sm={0} md={7} lg={7} xl={7}>
          <BlogMenu search={seach} />
        </Grid>
        <Grid item xs={0} sm={0} md={3} lg={3} xl={3}>
          {/*
           <BlogMenuRith />
          */}
        </Grid>
      </Grid>
      <FooterFin />
    </div>
  );
}
