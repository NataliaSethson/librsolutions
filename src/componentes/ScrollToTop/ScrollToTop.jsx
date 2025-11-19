import React, { useState, useEffect } from "react";
import { IconButton, Zoom } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

     
      if (scrollTop + windowHeight >= docHeight * 0.95) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={visible}>
      <IconButton
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: "30vh", 
          right: "10vw",  
          backgroundColor: "#64d881",
          color: "#fff",
          zIndex: 9999,
          "&:hover": {
            backgroundColor: "#4ec46a",
          },
          width: 90,
          height: 90,
        }}
      >
        <ArrowUpwardIcon fontSize="large" />
      </IconButton>
    </Zoom>
  );
};

export default ScrollToTop;








