import { Card, Grid, Stack, Typography ,CardActionArea,CardMedia,CardContent} from '@mui/material'
import React from 'react'
import { dataCequeNousFaison, listeMenu } from '../../data/Data'

function Homeaf() {
  return (
    <Grid container justifyContent={"center"} >
<Grid item bgcolor={"#f0f0f0"} width={"100%"} padding={5} justifyContent={"center"} >
<Stack >
<Typography fontWeight={"bold"}   fontSize={26} textAlign={"center"}  >
CE QUE NOUS FAISONS
</Typography>
</Stack>
<Stack flexDirection={"row"} justifyContent={"center"} mt={5}>
{
    dataCequeNousFaison.map((e,index)=>(
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
}

</Stack>
</Grid>
    </Grid>
  )
}

export default Homeaf
