import { Box, Image, Text, Flex } from "@chakra-ui/react";
import React from "react";
import { Boton } from "../../components";

import proyecto1 from "../../assets/img/proyecto1.png";
import proyecto2 from "../../assets/img/proyecto2.png";
import proyecto3 from "../../assets/img/proyecto3.png";

const Portfolio = () => {
  // --------estilos---------
  const estiloPortfolio = {
    width: "83%",
    margin: "0 auto",
    pb: "5.5em",
  };

const estiloimg = {

  height: '38vh',
  width:"26.5vw",
objectFit:'cover'

}

  return (
    <Box id="portfolio" as="section" bg="#0A0A0A">
      <Box sx={estiloPortfolio}>
        <Text
          as="h2"
          fontSize={25}
          textAlign="center"
          color="#878787"
          mb="2.5rem"
        >
          Portfolio
        </Text>
        <Flex justifyContent="center" mb='2.5rem'>
          <Boton text="Todos" bg="#AA8C55" color="white" />
          <Boton text="Escritorio" color="#878787" />
          <Boton text="Tablet" color="#878787" />
          <Boton text="Móvil" color="#878787" />
        </Flex>
        <Flex flexWrap='wrap' gap='1rem .6rem' >
          <Image sx={estiloimg} src={proyecto1} alt="proyecto 1" />
          <Image sx={estiloimg} src={proyecto2} alt="proyecto 2" />
          <Image sx={estiloimg} src={proyecto3} alt="proyecto 3" />
          <Image sx={estiloimg} src={proyecto1} alt="proyecto 4" />
          <Image sx={estiloimg} src={proyecto2} alt="proyecto 5" />
          <Image sx={estiloimg} src={proyecto3} alt="proyecto 6" />
        </Flex>
      </Box>
    </Box>
  );
};

export { Portfolio };
