import { FaComments, FaRegLightbulb, FaPaintBrush, FaCheckCircle, FaGift, FaStar } from "react-icons/fa";
import "./ComoTrabajamos.css";

const steps = [
  { icon: <FaComments />, title: "Consultoría inicial", description: "Nos reunimos para entender tu negocio, objetivos y necesidades." },
  { icon: <FaRegLightbulb />, title: "Estrategia y planificación", description: "Definimos el enfoque visual y digital, colores, tipografías y estilo." },
  { icon: <FaPaintBrush />, title: "Diseño y desarrollo", description: "Creamos diseños gráficos, identidad visual y desarrollamos tu sitio web o piezas digitales." },
  { icon: <FaCheckCircle />, title: "Revisión y ajustes", description: "Presentamos los entregables, recibimos tu feedback y hacemos los ajustes necesarios." },
  { icon: <FaGift />, title: "Entrega", description: "Entregamos todos los archivos listos para publicar, optimizados y organizados." },
  { icon: <FaStar />, title: "Soporte inicial", description: "Ofrecemos soporte y guía inicial para que todo funcione correctamente." }
];

const ComoTrabajamos = () => {
  return (
    <section className="work-process">
      <h2>Nuestro Proceso de Trabajo</h2>
      <p>Así es como acompañamos a nuestros clientes desde la idea hasta la entrega final.</p>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            {step.icon && <div className="icon-circle">{step.icon}</div>}
            <div className="card-content">
              <h3>{step.title}</h3>
              <p className="description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComoTrabajamos;




