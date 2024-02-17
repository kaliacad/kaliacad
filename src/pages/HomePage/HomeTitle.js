import { Grid, Stack, Typography,Button, Hidden } from '@mui/material'
import React from 'react'
// import { StaticImage } from "gatsby-plugin-image"
import image from "../../images/acc2.png"
import { useNavigate } from 'react-router-dom'


function HomeAcc() {
    const nav=useNavigate()

    const goToAlbum=()=>{
        nav("/album")
    }
    
  return (
    <div id='homepage' >
    <Hidden smDown mdDown >
    <Stack flexDirection={"row"} mt={10} justifyContent={"end"} >
    <Button
    
    onClick={()=>goToAlbum()}
        variant='outlined' 
        sx={{
                borderColor:"blue",
                borderWidth:1,
                color:'blue',
                marginRight:2,
            }} 
        >
            Album
        
        </Button>
        <Button variant='contained' sx={{
            bgcolor:"blue",
            color:'#FFF'
        }} >Contact</Button>
    </Stack>
    </Hidden>
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
<Hidden smDown mdDown >
<img src={image} alt='test' style={{
    width:"100%",
    height:"100%",
}} />
</Hidden>
</Grid>
<Grid item  sx={5} md={6} lg={6} sm={5} ml={5}>
<Stack justifyContent={"center"} height={400} width={"100%"} mt={5}>
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
   </div>
  )
}

export default HomeAcc
