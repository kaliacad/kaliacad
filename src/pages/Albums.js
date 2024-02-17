import React, { useState } from 'react'
import { Button, Card, CardActionArea, CardActions, CardMedia, Grid, IconButton, Stack, TextField, Tooltip, Typography } from '@mui/material'
import {  dataCequeNousFaisonAlbum } from '../data/Data'
import { Download, Search } from '@mui/icons-material';
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
            Nous nous engageons à vous fournir l'accès à la communauté open source de Wikipédia. Explorez nos différentes activités
        </Typography> 

        </Stack>
        </Grid>
        <Stack width={"100%"} mt={1} flexDirection={"row"} justifyContent={"center"} >
                <Button 
                    size='small' 
                    variant='outlined' 
                    sx={{
                        borderColor:"blue",
                        borderWidth:1,
                        color:"#000",
                        marginLeft:1
                    }} 
                    >photo</Button>
                    <Button 
                    size='small' 
                    variant='outlined' 
                    sx={{
                        borderColor:"red",
                        borderWidth:1,
                        color:"#000",
                        marginLeft:1
                    }} 
                    >
                        video
                    </Button>
            
        </Stack>
        <Stack width={"100%"} mt={1} flexDirection={"row"} justifyContent={"end"} alignItems={"end"} >
            <TextField 
            size='small' 
            placeholder='search...' 
            variant='standard'
            sx={{
                bgcolor:"#FFF",
                color:"#000"
            }}
            value={seacher} onChange={(e)=>setSeacher(e.target.value)} />
            <Search fontSize='medium' sx={{
                color:"gray",
                mr:2,
                mt:-10
            }} />
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
