import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import imagebackground from "../../images/image.jpg"
import { Google } from '@mui/icons-material'

function Homeblogs() {
  return (
    <Grid container >
        <Grid item sm={12} md={12} lg={12} >
            <div style={{
                backgroundImage:`url(${imagebackground})`,
                padding:40,
                borderRadius:10

            }} >
                <Typography 
                
                sx={{
                    fontWeight:"bold",
                    fontSize:25,
                    color:"#fff",
                    mt:2
                }} >
                    Bienvenu sur Kalie Academy
                </Typography>
                <Typography sx={{
                    color:"#fff",
                    fontSize:18,
                    mt:3,
                    // width:"60%"
                    textAlign:"justify"
                }} >
                Ajoutez un compte pour accéder à toutes les fonctionnalités et interagir avec le contenu partagé par la communauté
                </Typography>
                <div 
                style={
                    {
                        marginTop:10,
                        borderRadius:100,
                        width:"65%",
                        background:"blue",
                        display:"flex"
                    }
                } >
                    <Google sx={{
                        color:"#fff",
                        // mt:1,
                        fontSize:35
                    }} />
                    <Button sx={{
                        color:"#fff",
                        ml:2
                    }} >Continuer avec Google</Button>
                </div>
            </div>
        </Grid>
    </Grid>
  )
}

export default Homeblogs
