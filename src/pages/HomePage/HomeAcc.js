import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { StaticImage } from "gatsby-plugin-image"


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
    }
}} lg={5} md={6}
 >
<StaticImage
  src={"../../images/image.jpg"}
  alt="Description de votre image"
  width={300} // Largeur de l'image
  height={200} // Hauteur de l'image
/>
</Grid>
<Grid item  sx={6} md={7} lg={7} sm={6} >
<Stack justifyContent={"center"} height={400}>
<h1 style={{
    textShadow: "#000 1px 1px 2px",
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
