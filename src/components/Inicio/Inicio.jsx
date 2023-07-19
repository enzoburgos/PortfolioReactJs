import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";

import Escritorio from "../../assets/img/Escritorio.jpg";

const Inicio = () => {
  // ------estilos-------
  const estiloinicio = {
    bgImage: `${Escritorio}`,
    bgPosition: "center",
    bgSize: "cover",
    backgroundColor: "rgb( 25, 25, 25)",
    backgroundBlendMode: "soft-light",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    // fontSize: "calc(1em + 1vw)",
  };

  const botontrabajo = {
    color: "white",
    bg: "transparent",
    borderRadius: ".2rem",
    border: "2px solid #878787",
    pr : '1rem',
    pl : '1rem',
    fontSize : '.9rem',
    mr:'.7rem',
  };

  const botoncontratame = {

    color: "white",
    bg: "#AA8C55",
    borderRadius: ".2rem",
    border: "2px solid black",
    pr : '1rem',
    pl : '1rem',
    fontSize : '.9rem',
    

  }

  return (
    <Box id="inicio" as="section" sx={estiloinicio}>
      <Box>
        <Text fontSize="2vw" color="white" lineHeight=".2rem">
          Mi Nombre es
        </Text>
        <Text fontSize="6vw" color="white">
          Enzo Burgos
        </Text>
        <Text fontSize="2.2vw" color="#AA8C55" mb="1.3rem">
          Soy un Full Stack Developer
        </Text>
        <Button variant="unstyled" sx={botontrabajo}>Ver Trabajos</Button>
        <Button variant='unstyled' sx={botoncontratame}> Contratame </Button>
      </Box>
    </Box>
  );
};

export { Inicio };
