import BuildTrust from "./Component/Bottom_section/BuildTrust"
import Expe from "./Component/Bottom_section/Expe"
import Footer from "./Component/Bottom_section/Footer"
import One_stop from "./Component/Mid_section/One_stop"
import Platform from "./Component/Mid_section/Platform"
import Private from "./Component/Mid_section/Private"
import Simple_seam from "./Component/Mid_section/Simple_seam"
import Form from "./Component/Top_section/Form"
import NavBar from "./Component/Top_section/NavBar"
import Video from "./Component/Top_section/Video"

function App() {


  return (
    <>
     <NavBar/>
     <Video/>
     <Form/>
     <Platform/>
     <Simple_seam/>
     <Private/>
     <One_stop/>
     <Expe/>
     <BuildTrust/>
     <Footer/>
    </>
  )
}

export default App
