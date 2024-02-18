import React from 'react'
import { Grid, Stack, Typography } from '@mui/material'
import FooterFin from './HomePage/HomeFooter'
import ITextFieldnput from '../controlers/TextFieldInput'
import { useFormik } from 'formik'
import * as yup from "yup"
import Butons from '../controlers/Butons'
import {  Telegram } from '@mui/icons-material'
import TitleHeader from '../component/titleheader'

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
        <TitleHeader 
        title={"Nous Contacter"} 
        desicription={"Maitenant que vous savez ce que nous faisons... Dite nous en quoi nous pouvons vous aider!"} 
        />
        
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
