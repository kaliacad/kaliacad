import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'

function TitleHeader({title,desicription}) {
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} sx={{
        bgcolor:"#f0f0f0",
        height:200,
        justifyContent:"center",
        alignItems:"center"
    }} >
    <Typography 
        fontSize={40} 
        fontWeight={"bold"} 
        textAlign={"center"}
        mt={5}
     >
        {title}
    </Typography> 
    <Stack width={"100%"} justifyContent={"center"} flexDirection={"row"} >
    <Typography
        fontSize={18} 
        fontWeight={"bold"} 
        textAlign={"center"}
        // mt={5}
        color={"gray"}
        // bgcolor={"red"}
        width={"50%"}
        
     >
        {desicription}
    </Typography> 

    </Stack>
    </Grid>
  )
}

export default TitleHeader
