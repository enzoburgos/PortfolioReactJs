import { Box, Image, Text, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { Boton } from "../../components";

import proyecto1 from "../../assets/img/proyecto1.png";
import proyecto2 from "../../assets/img/proyecto2.png";
import proyecto3 from "../../assets/img/proyecto3.png";

import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

import { CloseIcon } from "@chakra-ui/icons";

const Portfolio = () => {
  // --------estilos---------
  const estiloPortfolio = {
    width: "83%",
    margin: "0 auto",
    pb: { base: "3.5em", lg: "5.5em" },
  };

  const estiloimg = {
    height: { base: "16vh", md:'auto', lg: "38vh" },
    width: { base: "48%", md:'39.9vw', lg: "26.5vw" },
    objectFit: "cover",
    borderRadius: "1",
    cursor: "pointer",
    transition: "all .5s",
    ":hover": {
      transform: "scale(1.04)",
    },
  };

  const contmostrarimg = {
    top: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    bg: "rgba(0,0,0,0.7)",
    width: "100vw",
    height: "100vh",
    zIndex: "999",
  };

  const titulo = {
    fontSize: {base:"25", xl:'3rem'},
    textAlign: "center",
    color: "#878787",
    mb: { base: "2rem", md: "2.5rem" },
  };

  const flexbotones = {
    justifyContent: "center",
    mb: "2.5rem",
    gap: ".1rem",
    // display: { base: "none", md: "block" },
  };

  // ---------usestate img---------

  const [mostrarImg, setMostrarImg] = useState(false);

  const clickImg = (proyecto) => {
    setMostrarImg(true);
    document.body.style.overflow = "hidden";
  };

  const iconocerrar = () => {
    setMostrarImg(false);
    document.body.style.overflow = "auto";
  };

  // const proyectos = ['proyecto1', 'proyecto2', 'proyecto3', 'proyecto4']

  return (
    <>
      <Box id="portfolio" as="section" bg="#0A0A0A">
        <Box sx={estiloPortfolio}>
          <Text as="h2" sx={titulo}>
            Portfolio
          </Text>
          <Box display={{base:'none', md:'block'}}>
            <Flex sx={flexbotones}>
              <Boton text="Todos" bg="#AA8C55" color="white" />
              <Boton text="Escritorio" color="#878787" />
              <Boton text="Tablet" color="#878787" />
              <Boton text="Móvil" color="#878787" />
            </Flex>
          </Box>
          <Flex flexWrap="wrap" gap="1rem .6rem">
            <Image
              sx={estiloimg}
              src={proyecto1}
              alt="proyecto 1"
              onClick={clickImg}
            />
            <Image sx={estiloimg} src={proyecto2} alt="proyecto 2" />
            <Image sx={estiloimg} src={proyecto3} alt="proyecto 3" />
            <Image
              sx={estiloimg}
              src={proyecto1}
              alt="proyecto 4"
              onClick={clickImg}
            />
            <Image sx={estiloimg} src={proyecto2} alt="proyecto 5" />
            <Image sx={estiloimg} src={proyecto3} alt="proyecto 6" />
          </Flex>
        </Box>
      </Box>

      {mostrarImg && (
        <Box sx={contmostrarimg}>
          <ArrowBackIcon
            boxSize="3rem"
            color="white"
            cursor="pointer"
            position="absolute"
            left="10"
          />
          <Image src={proyecto1} />
          <ArrowForwardIcon
            boxSize="3rem"
            color="white"
            cursor="pointer"
            position="absolute"
            right="10"
          />
          <CloseIcon
            color="#878787"
            position="absolute"
            boxSize="25"
            top="10"
            right="14"
            cursor="pointer"
            onClick={iconocerrar}
          />
        </Box>
      )}
    </>
  );
};

export { Portfolio };
