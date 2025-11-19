import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import WspButton from "./componentes/Wsp/WspButton"
import Footer from "./componentes/Footer/Footer"
import Inicio from "./componentes/Inicio/Inicio"
import './App.css'
import Servicios from "./componentes/Servicios/Servicios"
import Planes from "./componentes/Planes/Planes"
import PlanesIndividuales from "./componentes/PlanesIndividuales/PlanesIndividuales"
import ComoTrabajamos from "./componentes/ComoTrabajamos/ComoTrabajamos"
import Nav from "./componentes/Nav/Nav"
import ScrollToTop from "./componentes/ScrollToTop/ScrollToTop"


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element ={<Inicio/>}/>
        <Route path="/como-trabajamos" element ={<ComoTrabajamos/>}/>
        <Route path="/planes" element ={<Planes/>}/>
        <Route path="/planes-individuales" element ={<PlanesIndividuales/>}/>
        <Route path="/servicios" element ={<Servicios/>}/>
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
      <Footer></Footer>
      <WspButton></WspButton>
      <ScrollToTop></ScrollToTop>
      </BrowserRouter>
    </div>
  )
}

export default App
