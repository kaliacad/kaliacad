import { Button, Grid } from "@mui/material";
import * as React from "react";
import BlogMenu from "./blogs/blogMenu";
import BlogMenuRith from "./blogs/blogMenuRith";
import BlogMenuLefst from "./blogs/blogMenuLefst";
import FooterFin from "./HomePage/HomeFooter";
import ITextFieldnput from "../controlers/TextFieldInput";
import { Google } from "@mui/icons-material";


export default function Blogs() {
  
  return (
    <div style={{
        bgcolor:"#f0f0f0",
        marginTop:80
    }} >
        <Grid container flexDirection={"row"} sx={{bgcolor:"#fff"}} m={1} >
            <Grid item xs={0} sm={0} md={1} lg={1} xl={1} ></Grid>
            <Grid item xs={0} sm={0} md={7} lg={7} xl={7}  >
                <ITextFieldnput  placeholder={"Recherche..."} />
            </Grid>
            <Grid item xs={0} sm={0} md={3} lg={3} xl={3} ml={2}mt={-1.5} >
            <div 
                style={
                    {
                        marginTop:10,
                        borderRadius:100,
                        width:"90%",
                        background:"blue",
                        display:"flex",
                        '&:hover': {
                            backgroundColor: '#0d47a1',
                          },
                    }
                } >
                    <Google sx={{
                        color:"#fff",
                        // mt:1,
                        fontSize:35
                    }} />
                    <Button sx={{
                        color:"#fff",
                        ml:2
                    }} >Continuer avec Google</Button>
                </div>
            </Grid>
        </Grid>
   <Grid container flexDirection={"row"}
    sx={{
    bgcolor:"#f0f0f0",
    minHeight:"100%",
   }} >

    <Grid item xs={0} sm={0} md={2} lg={2} xl={2} >
        <BlogMenuLefst/>
    </Grid>
    <Grid item xs={0} sm={0} md={7} lg={7} xl={7} >
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