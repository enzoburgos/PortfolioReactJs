import React from "react";

import { Box, Link } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Menu = () => {

    
  const estilotextos = {
    color: "#878787",
    bg: "#181818",
    p: "1rem 5rem",
    Texalign: "center",
  };

  const estiloicono = {
    color: "white",
    boxSize: "4rem",
    cursor: "pointer",
  };
  return (
    <>
      <Box as="menu" display="flex" flexDirection="column" textAlign="center">
        <HamburgerIcon sx={estiloicono} />
        <Link sx={estilotextos} style={{ textDecoration: "none" }}>
          Inicio
        </Link>
        <Link sx={estilotextos} style={{ textDecoration: "none" }}>
          Sobre Mi
        </Link>
        <Link sx={estilotextos} style={{ textDecoration: "none" }}>
          Servicios
        </Link>
        <Link sx={estilotextos} style={{ textDecoration: "none" }}>
          Proyectos
        </Link>
      </Box>
    </>
  );
};

export { Menu };
