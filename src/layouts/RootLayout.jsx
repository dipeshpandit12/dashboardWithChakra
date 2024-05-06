import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { GridItem,Grid } from "@chakra-ui/react"
import Sidebar from "../components/Sidebar"

export default function RootLayout() {
  return (
    <Grid gridTemplateColumns="repeat(6,1fr)">
      <GridItem
      as="aside"
      // bg="brand.600"
      bg="purple.400"
      minHeight={{lg:"100vh"}}
      colSpan={{base:6,lg:2,xl:1}}
      p={{base:"20px",lg:"30px"}}
      >
        <Sidebar/>
      </GridItem>
      <GridItem
      as="main"
      colSpan={{base:6,lg:4,xl:5}}
      p="40px"
      >
        <Navbar/>
        <Outlet />
      </GridItem>
    </Grid>
  )
}
