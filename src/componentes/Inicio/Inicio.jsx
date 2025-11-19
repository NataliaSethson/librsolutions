import ComoTrabajamos from '../ComoTrabajamos/ComoTrabajamos'
import Planes from '../Planes/Planes'
import Servicios from '../Servicios/Servicios'
import Video from '../Video/Video'
import Videox from '../Videox/Videox'
import './Inicio.css'

const Inicio = () => {
  return (

    <div>
      <div className='inicioConteiner'>
        <div className='columnaImagen'>
          <img
            src="https://www.shutterstock.com/image-photo/content-creativity-digital-graphic-layout-600nw-267935942.jpg"
            alt="Imagen Drawer"
            className='imgInicio'
          />
        </div>

        <div className='columnaTexto'>
          <h2 className='textInicio'>
            En Libr Solutions ayudamos a emprendedores y empresas a construir una imagen profesional y una presencia digital verdaderamente efectiva. Combinamos diseño gráfico creativo con desarrollo web moderno para que tu marca se vea bien, funcione bien y genere resultados reales.
            <br /><br />
            Creamos identidades visuales consistentes, piezas gráficas de alto impacto y sitios web que transmiten confianza, claridad y estilo. Cada proyecto lo abordamos con un enfoque estratégico: entendemos tu negocio, definimos lo que necesitás y diseñamos soluciones que conectan con tus clientes.
            <br /><br />
            Nuestro objetivo es que tu marca destaque, se vea profesional y tenga una base sólida para escalar.
            <br /><br />
            Trabajamos con procesos claros, diseño cuidado y desarrollos web optimizados para rendimiento, estética y experiencia de usuario.
          </h2>

          <h3 className='pdInicio'>
            Impulsamos tu presencia visual y digital con creatividad, técnica y una visión enfocada en resultados.
          </h3>
        </div>

        <div className='columnaImagen'>
          <img
            src="https://www.ideasinteligentes.com.mx/assets/images/resources/a1.jpg"
            alt="Imagen Drawer"
            className='imgInicio2'
          />
        </div>
      </div>
      <Video></Video>

      <Servicios></Servicios>

      <Planes></Planes>


      <img src='./magia.jpg' alt='' className='imgMagia'/>


      <Videox></Videox>
      

      <ComoTrabajamos></ComoTrabajamos>

    </div>


  )
}

export default Inicio