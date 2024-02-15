import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
// import { StaticImage } from "gatsby-plugin-image"
import image from "../../images/acc2.png"


function HomeAcc() {
    
  return (
    
   <Grid container direction={"row"} mt={9}  sx={{
    height:488,
    ml:-1,
    // mt:-1,
    width:"100%"
   }}  >
<Grid item  sx={{
    display:{
        xs:"none",
        sm:"flex"
    },
}} lg={5} md={5}
 >
<img src={image} alt='test' style={{
    width:"100%",
    height:"100%",
}} />
</Grid>
<Grid item  sx={6} md={6} lg={7} sm={7} >
<Stack justifyContent={"center"} height={400}>
<h1 style={{
    textShadow: "#000 2px 0px 1px",
    fontSize:50,
    fontWeight:"bold",
    // fontFamily:"serif"
}}>CATALYSEUR DE LA CONTRIBUTION OPEN SOURCE</h1>
<Typography style={{
    marginTop:-30,
    fontSize:20,
    fontStyle:"oblique"
}} >changer le monde grâce au code</Typography>
</Stack>
</Grid>
   </Grid>
  )
}

export default HomeAcc
