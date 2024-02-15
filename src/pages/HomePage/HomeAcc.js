import { Grid, Typography } from '@mui/material'
import React from 'react'

function HomeAcc() {
  return (
    
   <Grid container direction={"row"} mt={9}   >
<Grid item  sx={6} md={5} lg={5} sm={6}
 >
<Typography>Logo</Typography>
</Grid>
<Grid item  sx={6} md={7} lg={7} sm={6} >
<Typography fontSize={45} fontFamily={"sans-serif"} textAlign={"inherit"} fontWeight={"bold"} >CATALYSEUR DE LA CONTRIBUTION OPEN SOURCE</Typography>
</Grid>
   </Grid>
  )
}

export default HomeAcc
