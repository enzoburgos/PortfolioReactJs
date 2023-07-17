import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Boton } from "../../components";

import Escritorio from "../../assets/img/Escritorio.jpg";

const Inicio = () => {
  // ------estilos-------
  const estiloinicio = {
    bg: "lightgreen",
    // height: "92vh",
    // justifyContent: "center",
    // textAlign: "center",
    // alignItems: "center",
    // fontSize: "calc(1em + 1vw)",
    // display: "flex"
  };

  return (
    <Box
      id="inicio"
      as="section"
      sx={estiloinicio}
      // bgImage={logo}
      // bgPosition="center"
      // bgRepeat="no-repeat"
      // bgSize='cover'
    >
      <Box bgImage={Escritorio} textAlign='center' bgRepeat='no-repeat' bgSize='cover' bgPosition='center'>
        <Text fontSize="2vw">Mi Nombre es</Text>
        <Text fontSize="6vw">Enzo Burgos</Text>
        <Text fontSize="2vw">Soy un Full Stack Developer </Text>
        <Boton text="Ver Trabajos" />
        <Boton text="Contratame" />
      </Box>
    </Box>
  );
};

export { Inicio };
