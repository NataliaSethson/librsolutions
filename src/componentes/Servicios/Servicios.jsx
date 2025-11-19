import { useEffect, useRef, useState } from 'react';
import './Servicios.css'

const Servicios = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`serviciosConteiner ${isVisible ? 'visible' : ''}`} ref={ref}>
      <div>
        <h4 className='titleServicios'>Diseño Gráfico</h4>
        <p className='descrpServicios'>
          Construimos identidades visuales únicas y consistentes, desde logotipos hasta piezas gráficas para redes, material promocional o papelería. Cada diseño busca generar impacto y reforzar la personalidad de tu marca.
        </p>
      </div>
      <div>
        <h4 className='titleServicios'>Desarrollo Web</h4>
        <p className='descrpServicios'>
          Creamos sitios web modernos, funcionales y responsivos, optimizados para ofrecer una experiencia de usuario clara, atractiva y eficiente. Nos aseguramos de que tu presencia online refleje profesionalismo y confianza.
        </p>
      </div>
      <h5 className='estrategiaServicios'>
        Analizamos tu negocio y tus objetivos para desarrollar soluciones a medida, combinando creatividad, técnica y visión enfocada en resultados.
      </h5>
    </div>
  )
}

export default Servicios
