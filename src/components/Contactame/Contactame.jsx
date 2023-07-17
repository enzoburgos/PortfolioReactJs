import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";
// import { Boton } from "../Boton/Boton";
// import { Formulario } from "../Formulario/Formulario";
// import { Info } from "../Info/Info";

import { Boton, Formulario, Info } from "../../components";

const Contactame = () => {
    
  // ---------estilos----------
  const estiloContactame = {
    bg: "lightyellow",
  };

  return (
    <Box as="section" sx={estiloContactame}>
      <Text as="h2" fontSize={25} textAlign="center">
        Contactame
      </Text>

      <Flex justifyContent={"space-between"}>
        <Box>
          <Info titulo="Teléfono" info="+541131421804" />
          <Info titulo="Dirección" info="Argentina, Buenos Aires" />
          <Info titulo="Email" info="enzoburgos960@gmail.com" />
        </Box>
        <Box>
          <Formulario />
          <Boton text="Enviar" />
        </Box>
      </Flex>
    </Box>
  );
};

export { Contactame };
