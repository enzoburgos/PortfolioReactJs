import { Box, Text } from "@chakra-ui/react";
import React from "react";

import { Formulario, Info } from "../../components";

const Contactame = () => {
  // ---------estilos----------
  const estiloContactame = {
    width: "83%",
    m: "0 auto",
  };

  return (
    <Box as="section" bg="#0A0A0A" pb="5.5rem">
      <Box sx={estiloContactame}>
        <Text
          as="h2"
          fontSize={25}
          textAlign="center"
          color="#878787"
          mb="3rem"
        >
          Contactame
        </Text>

        <Box display="flex" justifyContent="space-between">
          <Box display="flex" flexDirection="column" gap="2rem">
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

          <Formulario />
        </Box>
      </Box>
    </Box>
  );
};

export { Contactame };
