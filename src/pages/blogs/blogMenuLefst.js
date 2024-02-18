import { Home, SmsFailed } from '@mui/icons-material'
import { Button, Card, CardContent, Divider, Typography } from '@mui/material'
import React from 'react'

function BlogMenuLefst() {
  return (
    <div style={{
        marginTop:75,
        padding:5
    }} >
      <Card  sx={{
        // justifyContent:"center",
        // alignItems:"center",
        // display:"flex",
        // flexDirection:"column"
      }} >
        <CardContent  >
        <Button sx={{
            width:"100%",
            textAlign:"end",
            justifyContent:"flex-start",
            // color:"blue",
            ":hover":{
                background:"#f0f0f0",
                color:"blue",
            }
        }}  variant="text" startIcon={<Home />}>
            Home
        </Button>
        
        <Button sx={{
            width:"100%",
            textAlign:"end",
            justifyContent:"flex-start",
            // color:"blue",
            ":hover":{
                background:"#f0f0f0",
                color:"blue",
            }
        }}  variant="text" startIcon={<Home />}>
            Home
        </Button>
        <Button sx={{
            width:"100%",
            textAlign:"end",
            justifyContent:"flex-start",
            // color:"blue",
            ":hover":{
                background:"#f0f0f0",
                color:"blue",
            }
        }}  variant="text" startIcon={<Home />}>
            Home
        </Button>
<Divider sx={{
    mt:1,
    mb:1
}} />
<Button sx={{
            width:"100%",
            textAlign:"end",
            justifyContent:"flex-start",
            ":hover":{
                background:"#f0f0f0",
                // color:"#fff"
            }
        }}  variant="text" startIcon={<SmsFailed />}>
            A props de nous
        </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default BlogMenuLefst
