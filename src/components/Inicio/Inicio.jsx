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
    
  };

  const botontrabajo = {
    color: "white",
    bg: "transparent",
    borderRadius: ".2rem",
    border: "2px solid #878787",
    pr : '1rem',
    pl : '1rem',
    mr:'.7rem',
    transition:'all 0.5s',
    ':hover':{
      transform: 'scale(1.07)'
    },
    fontSize:{base:'.9rem',md:'.9rem', lg:'.9rem', xl:"2rem"} 

  };

  const botoncontratame = {

    color: "white",
    bg: "#AA8C55",
    borderRadius: ".2rem",
    border: "2px solid black",
    pr : '1rem',
    pl : '1rem',
    fontSize : '.9rem',
    transition:'all 0.5s',
    ':hover':{
      transform: 'scale(1.07)'
    }

  }

  return (
    <Box id="inicio" as="section" sx={estiloinicio}>
      <Box>
        <Text fontSize={{base:'5vw',md:'2vw', lg:'2vw' ,xl:"2vw"}} color="white" lineHeight=".2rem" >
          Mi Nombre es
        </Text>
        <Text fontSize={{base:'10vw',md:'6vw', lg:'6vw',xl:"6vw"}} color="white">
          Enzo Burgos
        </Text>
        <Text fontSize={{base:'4vw',md:'2.2vw', lg:'2.2vw', xl:"2.2vw"}} color="#AA8C55" mb="1.3rem">
          Soy un Full Stack Developer
        </Text>
        <Button variant="unstyled" sx={botontrabajo}>Ver Trabajos</Button>
        <Button variant='unstyled' sx={botoncontratame}> Contratame </Button>
      </Box>
    </Box>
  );
};

export { Inicio };
