import { Card, CardActionArea, CardActions, CardMedia, Grid, IconButton, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import {  dataCequeNousFaisonAlbum } from '../data/Data'
import { Download } from '@mui/icons-material';
import FooterFin from './HomePage/HomeFooter';

function Albums() {
    const [seacher,setSeacher]=useState("")

    const handleDownload = (e) => {
        const link = document.createElement('a');
        link.download = e.title; 
        link.href =  e.image;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

      const datax= dataCequeNousFaisonAlbum.filter((item)=>
      seacher.toUpperCase()===""
      ?item
      :item && 
      item.title &&
      item.title.toUpperCase().includes(seacher.toUpperCase()))

  return (
    <div style={{
        marginTop:50
    }}>
      <Grid container>
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
            Notre Galerie
        </Typography> 
        </Grid>
        <Stack width={"100%"} mt={1} flexDirection={"row"} justifyContent={"end"} alignItems={"end"} >
            <TextField size='small' placeholder='search...' value={seacher} onChange={(e)=>setSeacher(e.target.value)} />
        </Stack>
        <div style={{
            margin:50,
            width:"100%",
            height:400,
            overflow:"auto",
            flexWrap:"wrap",
            display:"flex",
            flexDirection:"row",
            // justifyContent:"center",
            // alignItems:"center",
            // padding:10,
            // background:"red"
        }} > 
        
        {
                datax.map((e,index)=>(
                    <Card
                     sx={{ 
                        minWidth: 345, 
                        m:2, 
                        borderRadius:5,
                        ":hover":{
                        background:"#fff"
                    }}} 
                    elevation={0}  >
                        <CardActionArea>
                        <Tooltip title={e.title}  >
                            <CardMedia
                            component="img"
                            height={200}
                            image={e.image}
                            alt="green iguana"
                            sx={{
                                objectFit:"cover",
                                borderRadius:5,
                                
                                ":hover":{
                                    cursor:"pointer",
                                    bgcolor:"#f0f0f0"
                                }
                                // background:"red"
                            }}
                            />
                    </Tooltip>
                    <CardActions sx={{
                        justifyContent:"end"
                    }} >
                        <Tooltip title="Telecharger" >
                        <IconButton onClick={()=>handleDownload(e)} >
                            <Download  sx={{
                                color:"gray",
                                ":hover":{
                                    color:"blue"
                                }
                            }} />
                        </IconButton>
                        </Tooltip>
                    </CardActions>
                     </CardActionArea>
                    </Card>
                ))
            }
        </div>
      </Grid>
      <FooterFin/>
    </div>
  )
}

export default Albums
