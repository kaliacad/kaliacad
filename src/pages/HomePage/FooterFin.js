import { Stack, Typography } from '@mui/material'
import React from 'react'
import AdbIcon from '@mui/icons-material/Adb';
import {GitHub,Email,Telegram,YouTube} from "@mui/icons-material"

function FooterFin() {
    const currentyear=new Date().getFullYear()
  return (
    <Stack  m={3} flexDirection={"row"} justifyContent={"space-between"}>
        <div>
            <span style={{
                color:"gray",
                fontSize:12
            }} >@{currentyear} Kali Academy</span>
        </div>
        <div>
            <Stack flexDirection={"row"} >
            <span style={{
                color:"gray",
                fontSize:12,
                marginRight:5,
                ":hover":{
                    color:"blue"
                }
            }} ><GitHub fontSize='small' /></span>
            <span style={{
                color:"gray",
                fontSize:12
            }} ><Email fontSize='small' /></span>
            <span style={{
                color:"gray",
                fontSize:12
            }} ><Telegram fontSize='small'/></span>
            <span style={{
                color:"gray",
                fontSize:12
            }} ><YouTube fontSize='small' /></span>
            </Stack>
        </div>
        <div>
            <Stack flexDirection={"row"} >
            <span style={{
                color:"gray",
                fontSize:12,
                marginRight:5,
                ":hover":{
                    color:"blue"
                }
            }} >Conditions d'utilisation</span>
            <span style={{
                color:"gray",
                fontSize:12
            }} >politique de confidentialité</span>
            </Stack>
        </div>
    </Stack>
  )
}

export default FooterFin
