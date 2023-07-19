import React from "react";
import { useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

import { Formulario, Logo, Navbar } from "../../components";

import { CloseIcon } from "@chakra-ui/icons";

const Header = () => {
  // ----------estilos----------
  const estiloheader = {
    height: "3.5rem",
    bg: "#181818",
    display: "flex",
    alignItems: "center",
    position: "fixed",
    width: "100%",
    justifyContent: "space-between",
    pr: "5.5rem",
    pl: "5.5rem",
    zIndex:'300'
    // ':hover': {
    //   bg: 'lightpink',
    // }
  };

  const estiloboton = {
    color: "white",
    bg: "#AA8C55",
    borderRadius: "1",
    p: "0 1rem",
  };

  const estilobgform = {
    position: "absolute",
    width: "100vw",
    height: "100vh",
    top: "0",
    left: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bg: "rgba(0,0,0,0.7)",
    "z-index": "10",
  };

  // ---------------hover---------------
  


  // ----------usestate mostrar formulario---------

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const botoncontactame = () => {
    setMostrarFormulario(true);
    document.body.style.overflow = 'hidden';
  };

  const iconocerrar = () => {
    setMostrarFormulario(false)
    document.body.style.overflow = 'auto';
  }

  return (
    <Box as="header" sx={estiloheader}>
      <Logo />
      <Flex alignItems="center">
        <Navbar />
        <Button variant="unstyled" sx={estiloboton} onClick={botoncontactame}>
          Contáctame
        </Button>
        {mostrarFormulario && (
          <Box sx={estilobgform}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              bg="#0A0A0A"
              height="80vh"
              width="80vw"
              fontSize=".5rem"

            >
              <CloseIcon
                color="#878787"
                position="absolute"
                boxSize="25"
                top="10"
                right="14"
                cursor="pointer"
                onClick={iconocerrar}
              />

              <Text fontSize="2rem" mb="2rem" color="#878787">
                Contactame
              </Text>
              <Formulario />
            </Box>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export { Header };
