import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import FooterFin from './HomePage/HomeFooter'
import ITextFieldnput from '../controlers/TextFieldInput'
import { useFormik } from 'formik'
import * as yup from "yup"
import Butons from '../controlers/Butons'
import { Send, Telegram } from '@mui/icons-material'

function Contacter() {


const validation=useFormik({
    enableReinitialize:true,
    initialValues:{
        email:"",
        message:""
    },
    validationSchema:yup.object({
        email:yup.string().required("is require"),
        message:yup.string().required("is require")
    }),
    onSubmit:(e,{resetForm})=>{
        console.log(e)
        resetForm()
        alert("envoie avec success")
    }
})

  return (
    <div style={{
        marginTop:50
    }} >
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
            Nous Contacter
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
            Maitenant que vous savez ce que nous faisons... Dite nous en quoi nous pouvons vous aider!
        </Typography> 
        </Stack>
        </Grid>
        <Stack minHeight={"50%"} width={"50%"} m={5} >
            <ITextFieldnput 
                value={validation.values.email} 
                placeholder={"email"} id={"email"} 
                type={"email"} 
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                error={validation.errors.email && validation.touched.email ? true :false }
                label={"Email"}
            />
            <p
        style={{
            fontSize: 9,
            color: "red",
            marginTop: -1,
            }}
          >
            {validation.errors.email && validation.touched.email ? validation.errors.email :""}
          </p>
            <ITextFieldnput 
                value={validation.values.message} 
                placeholder={"message"} 
                id={"message"} 
                multiline={true} 
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                error={validation.errors.message && validation.touched.message ? true :false }
                texterror={validation.errors.message && validation.touched.message ? validation.errors.message :"" }
                label={"Message"}
            />
             <p
        style={{
            fontSize: 9,
            color: "red",
            marginTop: -1,
            }}
          >
            {validation.errors.message && validation.touched.message ? validation.errors.message :""}
          </p>

           <Stack  flexDirection={"row"} justifyContent={"end"} mt={2} mb={5}>
           <Butons icons={<Telegram/>} onClick={validation.handleSubmit} title={"Envoie"} />
           </Stack>
        </Stack>
        </Grid>
        <FooterFin/>
    </div>
  )
}

export default Contacter
