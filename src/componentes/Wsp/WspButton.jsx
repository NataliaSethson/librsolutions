import { FloatingWhatsApp } from "react-floating-whatsapp";
import "./WspButton.css"

export default function WspButton() {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="541166778258"
        accountName="LIBR SOLUTIONS"
        avatar="logo.jpg"
        chatMessage="¡Hola! Escribe tu consulta y te responderemos a la brevedad"
        placeholder="Escribe un mensaje..."
      />
    </div>
  )}