import { Grid, Stack, Typography,Button } from '@mui/material'
import React from 'react'
// import { StaticImage } from "gatsby-plugin-image"
import image from "../../images/acc2.png"


function HomeAcc() {
    
  return (
    <  >
    <Stack flexDirection={"row"} mt={10} justifyContent={"end"} >
    <Button variant='outlined' sx={{
            borderColor:"blue",
            borderWidth:1,
            color:'blue',
            marginRight:2,
            
            
        }} >Album</Button>
        <Button variant='contained' sx={{
            bgcolor:"blue",
            color:'#FFF'
        }} >Contact</Button>
    </Stack>
   <Grid container direction={"row"}   sx={{
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
    fontSize:53,
    fontWeight:"bold",
    // fontFamily:"serif"
}}>CATALYSEUR DE LA CONTRIBUTION OPEN SOURCE.</h1>
<Typography style={{
    marginTop:-30,
    fontSize:18,
    fontStyle:"oblique",
    // textDecoration:"underLine",
    color:"grey"
}} >changer le monde grâce au code 👋 </Typography>
<Stack flexDirection={"row"} mt={2} justifyContent={"left"} >
        <Button variant='contained' sx={{
            bgcolor:"blue",
            color:'#FFF'
        }} >Faire un dont</Button>
         <Button variant='text' sx={{
            borderColor:"blue",
            borderWidth:1,
            color:'blue',
            marginLeft:2,
            textDecoration:"underLine"
            
        }} >Voir nos Seances</Button>
    </Stack>

</Stack>
</Grid>
   </Grid>
   </>
  )
}

export default HomeAcc
