import * as React from "react"
import Header from "../navigation/Header"
import HomeAcc from "./HomePage/HomeAcc"
import HomaCenter from "./HomePage/HomaCenter"
import Mission from "./HomePage/Mission"

const pageStyles = {
  color: "#232129",
  // padding: 10,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <div>
      <Header/>
    <main style={pageStyles}>
    <HomeAcc/>
    <HomaCenter/>
    <Mission/>
    </main>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
