import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Boton } from "../Boton/Boton";

import logo from '../../assets/imagenes/logo192.png'


const Portfolio = () => {
  const estiloPortfolio = {
    bg: "lightgreen",
  };

  return (
    <Box id="portfolio" as='section' sx={estiloPortfolio}>
      <Text as="h2">Portfolio</Text>
      <Boton text="Todos" />
      <Boton text="Escritorio" />
      <Boton text="Tablet" />
      <Boton text="Móvil" />
      <Image width='100' src={logo}/>
      <Image width='100' src={logo}/>
      <Image width='100' src={logo}/>
      <Image width='100' src={logo}/>
      <Image width='100' src={logo}/>
      <Image width='100' src={logo}/>
    </Box>
  );
};

export { Portfolio };