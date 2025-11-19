import { 
  Box, Grid, Card, CardContent, CardHeader, Typography, 
  Button, List, ListItem, ListItemIcon, ListItemText 
} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import { Link } from "react-router-dom";

export default function Planes() {

  const whatsapp = "5491166778258";

  const getWhatsAppLink = (plan) =>
    `https://wa.me/${whatsapp}?text=Hola!%20Estoy%20interesado%20en%20el%20plan%20${encodeURIComponent(
      plan
    )}.%20¿Podrías%20darme%20más%20información?`;

  const planes = [
    {
      title: "Starter",
      sub: "Ideal para comenzar",
      items: [
        "Diseño de logo profesional",
        "Landing page en React",
        "2 plantillas para redes",
        "Integración WhatsApp",
        "SEO inicial"
      ]
    },
    {
      title: "Intermedio",
      sub: "Para marcas en crecimiento",
      items: [
        "Logo profesional",
        "Web en React (3 secciones)",
        "5 plantillas para redes",
        "SEO completo",
        "Integración WhatsApp"
      ]
    },
    {
      title: "Premium",
      sub: "Solución completa",
      items: [
        "Web en React (4 a 6 secciones)",
        "UX/UI personalizado",
        "Branding completo",
        "Contenido optimizado",
        "10 plantillas para redes",
        "Integraciones extra"
      ]
    }
  ];

  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: "#64d881" }}>
      
      <Typography 
        variant="h4" 
        align="center" 
        gutterBottom 
        sx={{ color: "white", fontWeight: 700 }}
      >
        Planes y Beneficios
      </Typography>

      <Typography 
        variant="subtitle1" 
        align="center" 
        sx={{ mb: 6, color: "rgba(255,255,255,0.9)" }}
      >
        Elegí la solución que mejor se adapte a tu proyecto
      </Typography>

      <Grid container spacing={4} justifyContent="center">

        {planes.map((plan) => (
          <Grid item xs={12} md={4} key={plan.title}>
            
            <Card
              sx={{
                borderRadius: 3,
                p: 2,
                height: "100%",
                backgroundColor: "#000",
                color: "white",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
                border: "1px solid rgba(255,255,255,0.1)",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 0 25px rgba(0,0,0,0.5)",
                }
              }}
            >
              <CardHeader
                title={plan.title}
                subheader={plan.sub}
                sx={{
                  textAlign: "center",
                  "& .MuiCardHeader-title": {
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    color: "white"
                  },
                  "& .MuiCardHeader-subheader": {
                    color: "rgba(255,255,255,0.5)"
                  }
                }}
              />

              <CardContent sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
                
                <List sx={{ flexGrow: 1 }}>
                  {plan.items.map((text) => (
                    <ListItem key={text} sx={{ py: 0.4 }}>
                      <ListItemIcon>
                        <CheckIcon sx={{ color: "#64d881" }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={text} 
                        sx={{ color: "white" }}
                      />
                    </ListItem>
                  ))}
                </List>

                <Button
                  variant="contained"
                  fullWidth
                  href={getWhatsAppLink(plan.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    mt: 2,
                    backgroundColor: "white",
                    color: "#000",
                    fontWeight: 700,
                    borderRadius: 2,
                    transition: "all 0.3s",
                    "&:hover": {
                      backgroundColor: "#f3f3f3",
                      transform: "translateY(-3px)"
                    }
                  }}
                >
                  Consultar
                </Button>

              </CardContent>
            </Card>

          </Grid>
        ))}

      </Grid>

      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Button
          component={Link}
          to="/planes-individuales"
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "#000",
            fontWeight: 700,
            borderRadius: 2,
            px: 4,
            py: 1.5,
            fontSize: "1.1rem",
            "&:hover": {
              backgroundColor: "#f3f3f3",
              transform: "translateY(-3px)",
            }
          }}
        >
          Ver planes individuales
        </Button>
      </Box>

    </Box>
  );
}




