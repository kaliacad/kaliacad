import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { StaticImage } from "gatsby-plugin-image"


function Mission() {
    
  return (
    <Stack flexDirection={"row"} padding={10} justifyContent={"space-between"} >

<Stack style={{
    width:"50%"
}} >
    <h1>NOTRE MISSION</h1>
    <p>Augmenter le nombre de développeurs contributeurs open source dans les zones habituellement moins représentées notamment en Afrique</p>
</Stack>
<Stack style={{
    width:"40%",
}} >
    <p>o</p>
<StaticImage
  src={"../../images/image.jpg"}
  alt="Description de votre image"
  width={300} // Largeur de l'image
  height={200} // Hauteur de l'image
/>
</Stack>
    </Stack>
   
  )
}

export default Mission
