import React from "react";
import { useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Formulario, Logo, Menu, Navbar } from "../../components";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const Header = () => {

  
  // ----------estilos----------
  const estiloheader = {
    height: { base: "3.5rem", xl: "6rem" },
    bg: "#181818",
    display: "flex",
    alignItems: "center",
    position: "fixed",
    width: "100%",
    justifyContent: "space-between",
    pr: { base: "5.5rem", xl: "10rem" },
    pl: { base: "5.5rem", xl: "10rem" },
    zIndex: "300",
  };

  const estiloboton = {
    color: "white",
    bg: "#AA8C55",
    borderRadius: ".1rem",
    p: { base: "0 1rem", xl: ".7rem 2rem 3.7rem 1.9rem" },
    mb: { xl: ".1rem" },
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
    fontSize: { base: "1rem", xl: "1.9rem" },
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
    boxSize: "30",
    border: "transparent",
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

  const [clicked, setCliked] = useState(false);

  const mostrarMenu = () => {
    setCliked(!clicked);
  };

  return (
    <>
      <Box display={{ base: "none", lg: "block" }}>
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
      <Box
        display={{ base: "block", lg: "none" }}
        position="fixed"
        zIndex="1000"
      >
        <Box p="1.5rem 0 0 1.5rem" bg={clicked ? "#181818" : ""}>
          <HamburgerIcon sx={iconomenu} onClick={mostrarMenu} />
        </Box>
        {clicked && <Menu />}
      </Box>
    </>
  );
};

export { Header };
