import React from "react";
import { Box, Link } from "@chakra-ui/react";

const Menu = () => {

    
  // --------estilos-------

  const estilotextos = {
    color: "#878787",
    bg: "#181818",
    p: "1rem 5rem",
    Texalign: "center",
    ":hover": {
      borderBottom: "1px black solid",
    },
  };

  return (
    <>
      <Box as="menu" display="flex" flexDirection="column" textAlign="center">
        <Link
          sx={estilotextos}
          style={{ textDecoration: "none" }}
          href="#inicio"
        >
          Inicio
        </Link>
        <Link
          sx={estilotextos}
          style={{ textDecoration: "none" }}
          href="#sobre-mi"
        >
          Sobre Mi
        </Link>
        <Link
          sx={estilotextos}
          style={{ textDecoration: "none" }}
          href="#servicios"
        >
          Servicios
        </Link>
        <Link
          sx={estilotextos}
          style={{ textDecoration: "none" }}
          href="#portfolio"
        >
          Proyectos
        </Link>
        <Link
          sx={estilotextos}
          style={{ textDecoration: "none" }}
          href="#contactame"
        >
          Contacto
        </Link>
      </Box>
    </>
  );
};

export { Menu };
