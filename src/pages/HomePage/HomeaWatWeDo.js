import { Card, Grid, Stack, Typography ,CardActionArea,CardMedia,CardContent, Hidden} from '@mui/material'
import React from 'react'
import { dataCequeNousFaison, listeMenu } from '../../data/Data'
import useCarousel from "../hooks/useCarousel"

const dat=dataCequeNousFaison.map((e,index)=>(
        <Card sx={{ maxWidth: 345, ml:1 }} >
            <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={e.image}
          alt="green iguana"
          style={{
            objectFit:"cover"
          }}
        />
        <CardContent>
          <Typography fontWeight={"bold"} gutterBottom variant="h6" component="div" textAlign={"center"} >
            {e.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {e.description}
          </Typography>
        </CardContent>
      </CardActionArea>
        </Card>
    ))


function Homeaf() {
  const {data,dataverticale}=useCarousel()
  return (
    <Grid container justifyContent={"center"} >
<Grid item bgcolor={"#f0f0f0"} width={"100%"} padding={5} justifyContent={"center"} >
<Stack >
<Typography fontWeight={"bold"}   fontSize={26} textAlign={"center"}  >
CE QUE NOUS FAISONS
</Typography>
</Stack>
<div style={{marginTop:40}} >
<Hidden smDown xsDown >
{
  data({datajx:dat})
}
</Hidden>
<Hidden mdDown lgDown xlDown  smUp xsUp >
  {
  dataverticale({datajx:dat})
}
</Hidden>


</div>
</Grid>
    </Grid>
  )
}

export default Homeaf
