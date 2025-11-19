import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import './Nav.css';

export default function Nav() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (value) => () => {
    setOpen(value);
  };

  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static" className="barra-verde">
        <Toolbar sx={{ minHeight: "350px !important", position: "relative" }}>

          <IconButton
            size="large"
            edge="start"
            color="#64d881 !important "
            aria-label="menu"
            sx={{ mr: 5 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon sx={{ fontSize: 40 }} />
          </IconButton>

          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pointerEvents: "none",
            }}
          >
            <Link to="/" style={{ pointerEvents: "auto" }}>
              <img
                src="/2.png"
                alt="Logo"
                style={{
                  height: "700px",
                  width: "auto",
                }}
              />
            </Link>
          </div>
        </Toolbar>
      </AppBar>

      {/* DRAWER LATERAL */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 350 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          className="drawer-verde"
        >


          <List>

            <ListItem button component={Link} to="/planes">
              <ListItemText primary="PLANES" className="textList" />
            </ListItem>

            <ListItem button component={Link} to="/planes-individuales">
              <ListItemText primary="PLANES INDIVIDUALES" className="textList" />
            </ListItem>

            <ListItem button component={Link} to="/como-trabajamos">
              <ListItemText primary="COMO TRABAJAMOS" className="textList" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}


