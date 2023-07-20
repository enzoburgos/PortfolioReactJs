import React from "react";
import { useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

import { Formulario, Logo, Menu, Navbar } from "../../components";

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

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
    zIndex: "300",

  };


  const estiloboton = {
    color: "white",
    bg: "#AA8C55",
    borderRadius: ".1rem",
    p: "0 1rem",
    transition: "all 0.3s ease",
    position: "relative",
    display: "inline-block",
    boxShadow:
      "inset 2px 2px 2px 0px rgba(255,255,255,.5), 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1)",
    ":hover": {
      bg: "black",
    },
    ":active": {
      top: "2px",
    },
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

  const estilocontform = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    bg: "#0A0A0A",
    height: "80vh",
    width: "80vw",
    fontSize: ".5rem",
  };

  const estiloiconocerrar = {
    color: "#878787",
    position: "absolute",
    boxSize: "25",
    top: "10",
    right: "14",
    cursor: "pointer",
  };

  const iconomenu = {
    color: "white",
    boxSize: "50",
  };

  // ----------usestate mostrar formulario---------

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const botoncontactame = () => {
    setMostrarFormulario(true);
    document.body.style.overflow = "hidden";
  };

  const iconocerrar = () => {
    setMostrarFormulario(false);
    document.body.style.overflow = "auto";
  };

// ---------mostrarMenu----------

  const [mostrarMenu, setMostrarMenu] = useState(false);

    const clickmenu = () => {
      setMostrarMenu(true);
      
    };


  return (
    <>
      <Box display={{ base: "none", md: "none" }}>
        <Box as="header" sx={estiloheader}>
          <Logo />
          <Flex alignItems="center">
            <Navbar />
            <Button
              variant="unstyled"
              sx={estiloboton}
              onClick={botoncontactame}
            >
              Contáctame
            </Button>
            {mostrarFormulario && (
              <Box sx={estilobgform}>
                <Box sx={estilocontform}>
                  <CloseIcon sx={estiloiconocerrar} onClick={iconocerrar} />
                  <Text fontSize="2rem" mb="2rem" color="#878787">
                    Contactame
                  </Text>
                  <Formulario />
                </Box>
              </Box>
            )}
          </Flex>
        </Box>
      </Box>
      <Box display={{ base: "block", md: "block" }} position="fixed">
        <HamburgerIcon sx={iconomenu} onClick={clickmenu}/>
        {mostrarMenu&&(
          <Menu />
        )}
      </Box>

    </>
  );
};

export { Header };
