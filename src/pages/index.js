import * as React from "react"
import Header from "../navigation/Header"
import HomeAcc from "./HomePage/HomeAcc"
import HomaCenter from "./HomePage/HomaCenter"
import Mission from "./HomePage/Mission"
import Homeaf from "./HomePage/Homeaf"
import FooterFin from "./HomePage/FooterFin"
//
const pageStyles = {
  color: "#232129",
  // padding: 10,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <div style={{
      // background:"beige",
      width:"100%"
    }} >
      <Header/>
    <main style={pageStyles}>
    <HomeAcc/>
    <HomaCenter/>
    <Mission/>
    <Homeaf/>
    <FooterFin/>
    </main>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
