import { Box, Grid, Card, CardContent, Typography, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";

export default function PlanesIndividuales() {

  const whatsapp = "5491166778258";

  const sendWhatsApp = (service) =>
    `https://wa.me/${whatsapp}?text=Hola!%20Quiero%20información%20sobre%20${encodeURIComponent(service)}.`;

  const navigate = useNavigate();

  const paquetes = [
    {
      title: "Branding",
      desc: "Identidad visual completa y coherente para tu marca.",
      items: [
        "Logo profesional",
        "Tipografías y paleta",
        "Manual de marca",
        "Aplicaciones básicas",
        "3 piezas gráficas"
      ],
    },
    {
      title: "Diseño Web",
      desc: "Web profesional con diseño moderno y optimizado.",
      items: [
        "Landing page o web institucional",
        "Diseño UX/UI a medida",
        "Optimización SEO",
        "Responsive completo",
        "Integraciones personalizadas"
      ],
    },
    {
      title: "Redes Sociales",
      desc: "Pack de diseños listos para usar en tus redes.",
      items: [
        "10 plantillas editables",
        "Diseño coherente",
        "Reels / posts / stories",
        "Estética profesional",
        "Guía de uso"
      ],
    },
  ];

  return (
    <Box sx={{ py: 10, px: 2, backgroundColor: "#000", color: "white" }}>

      {/* Títulos */}
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: 700, mb: 1 }}
      >
        Planes Individuales
      </Typography>

      <Typography
        align="center"
        sx={{ opacity: 0.7, mb: 6 }}
      >
        Elegí servicios específicos sin un plan completo
      </Typography>

      {/* Cards */}
      <Grid container spacing={4} justifyContent="center">
        {paquetes.map((p) => (
          <Grid item xs={12} md={4} key={p.title}>
            <Card
              sx={{
                backgroundColor: "#1e293b",
                color: "white",
                borderRadius: 3,
                p: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 0 25px rgba(100,216,129,0.25)",
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h5"
                  sx={{ color: "#64d881", fontWeight: 600, mb: 2 }}
                >
                  {p.title}
                </Typography>

                <Typography sx={{ opacity: 0.8, mb: 3 }}>
                  {p.desc}
                </Typography>

                {p.items.map((i) => (
                  <Typography
                    key={i}
                    sx={{ display: "flex", alignItems: "center", mb: 1 }}
                  >
                    <CheckIcon sx={{ color: "#64d881", mr: 1 }} /> {i}
                  </Typography>
                ))}
              </CardContent>

              <Button
                variant="contained"
                href={sendWhatsApp(p.title)}
                target="_blank"
                sx={{
                  mt: 2,
                  backgroundColor: "#64d881",
                  color: "#0f172a",
                  fontWeight: 700,
                  borderRadius: 2,
                  transition: "all 0.3s",
                  "&:hover": {
                    backgroundColor: "#7ff39e",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                Consultar
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Mantenimiento mensual */}
      <Box sx={{ mt: 10, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Mantenimiento Mensual
        </Typography>

        <Typography sx={{ opacity: 0.7, mb: 4 }}>
          Mantené tu web actualizada y funcionando a la perfección
        </Typography>

        <Card
          sx={{
            maxWidth: 700,
            mx: "auto",
            p: 4,
            borderRadius: 3,
            backgroundColor: "#1e293b",
            color:"white",
            boxShadow: "0 0 30px rgba(0,0,0,0.25)",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.03)",
              boxShadow: "0 0 25px rgba(100,216,129,0.25)",
            },
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#64d881" }}>
            ¿Qué incluye?
          </Typography>

          <Box sx={{ maxWidth: 420, mx: "auto", mb: 4, textAlign: "left" }}>
            {[
              "Actualizaciones web mensuales",
              "Revisión SEO",
              "Correcciones y mejoras",
              "Nuevas secciones o ajustes",
              "5 piezas gráficas mensuales",
              "Soporte técnico"
            ].map((i) => (
              <Typography
                key={i}
                sx={{ display: "flex", alignItems: "center", mb: 1 }}
              >
                <CheckIcon sx={{ color: "#64d881", mr: 1 }} /> {i}
              </Typography>
            ))}
          </Box>

          <Button
            variant="contained"
            href={sendWhatsApp("Mantenimiento Mensual")}
            target="_blank"
            sx={{
              backgroundColor: "#64d881",
              color: "#0f172a",
              fontWeight: 700,
              borderRadius: 2,
              px: 4,
              py: 1.4,
              fontSize: "1rem",
              transition: "all 0.25s",
              "&:hover": {
                backgroundColor: "#7af0a0",
                transform: "translateY(-3px)",
              },
            }}
          >
            Consultar por mantenimiento
          </Button>
        </Card>
      </Box>

      {/* Botón volver */}
      <Box sx={{ textAlign: "center", mt: 8 }}>
        <Button
          variant="outlined"
          onClick={() => navigate(-1)}
          sx={{
            borderColor: "#64d881",
            color: "#64d881",
            fontWeight: 700,
            borderRadius: 2,
            px: 4,
            py: 1.3,
            fontSize: "1rem",
            transition: "0.25s",
            "&:hover": {
              backgroundColor: "rgba(100,216,129,0.15)",
              borderColor: "#7af0a0",
              transform: "translateY(-3px)",
            },
          }}
        >
          Volver atrás
        </Button>
      </Box>

    </Box>
  );
}




