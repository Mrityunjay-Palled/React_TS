import Navbar from "@/scenes/navbar"
import { useState } from "react"
import { SelectedPage } from "@/shared/types"


const App = () => {
  const [selectedPage, setSelectedPage]=useState<SelectedPage>(SelectedPage.Home)
  return (
   <>
     <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
   </>
  )
}

export default App