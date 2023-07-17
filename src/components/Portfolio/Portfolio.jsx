import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Boton } from '../../components'

import proyecto1 from "../../assets/img/proyecto1.png"
import proyecto2 from '../../assets/img/proyecto2.png'
import proyecto3 from '../../assets/img/proyecto3.png'

const Portfolio = () => {
  const estiloPortfolio = {
    bg: "lightgreen",
  };

  return (
    <Box id="portfolio" as="section" sx={estiloPortfolio}>
      <Text as="h2" fontSize={25} textAlign="center">
        Portfolio
      </Text>
      <Box textAlign='center'>
        <Boton text="Todos" />
        <Boton text="Escritorio" />
        <Boton text="Tablet" />
        <Boton text="Móvil" />
      </Box>
      <Image width="100" src={proyecto1} />
      <Image width="100" src={proyecto2} />
      <Image width="100" src={proyecto3} />
      <Image width="100" src={proyecto1} />
      <Image width="100" src={proyecto2} />
      <Image width="100" src={proyecto3} />
    </Box>
  );
};

export { Portfolio };
