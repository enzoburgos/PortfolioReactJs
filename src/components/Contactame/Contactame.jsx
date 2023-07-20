import { Box, Text } from "@chakra-ui/react";
import React from "react";

import { Formulario, Info } from "../../components";

const Contactame = () => {
  // ---------estilos----------
  const contenedorcontact = {
    width: "83%",
    m: "0 auto",
  };

  const titulo = {
    fontSize: {base:"25", xl:'3rem'},
    textAlign: "center",
    color: "#878787",
    mb: { base: "2rem", md:'2.5rem', xl: "3rem" },
  };

  const infomasform = {

    display: "flex",
    justifyContent: "space-between",
    flexDirection: { base: "column-reverse", md: "row" },
    gap:{base:'3rem', md:'0'},
    mb:{xl:'3rem'}
  };

  return (
    <Box as="section" bg="#0A0A0A" pb={{base:'3rem', md:"5.5rem"}}>
      <Box sx={contenedorcontact}>
        <Text as="h2" sx={titulo}>
          Contactame
        </Text>

        <Box sx={infomasform}>
          <Box display="flex" flexDirection="column" gap={{base:'1rem', md:"2rem"}}>
            <Info
              titulo="Teléfono"
              info="+541131421804"
              icono="bi bi-telephone"
            />
            <Info
              titulo="Dirección"
              info="Argentina, Buenos Aires"
              icono="bi bi-geo-alt"
            />
            <Info
              titulo="Email"
              info="enzoburgos960@gmail.com"
              icono="bi bi-envelope"
            />
          </Box>
          <Box width={{base:'79vw',md:'46vw'}}>
            <Formulario />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { Contactame };
