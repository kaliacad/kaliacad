import { Card, CardActionArea, Typography } from '@mui/material'
import React from 'react'

export default function BlogMenuRith() {
  return (
    <div style={{
        marginTop:75,
        padding:5
    }} >
      <Card>
        <CardActionArea>
            <Typography 
                fontSize={20}
                fontWeight={"bold"}
                textAlign={"center"}
            >
                Événements tendances
            </Typography>
        </CardActionArea>
      </Card>
    </div>
  )
}
