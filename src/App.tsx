import Navbar from "@/scenes/navbar"
import { useState } from "react"
const App = () => {
  const [selectedPage, setSelectedPage]=useState<string>("home")
  return (
   <>
     <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
   </>
  )
}

export default App