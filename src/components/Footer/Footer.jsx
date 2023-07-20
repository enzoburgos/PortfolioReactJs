import React from "react";
import { Text, Box } from "@chakra-ui/react";
import { Redes } from "../../components";

const Footer = () => {

  // --------estilos---------
  const estilofooter = {
    pt: "1.5rem",
    pb: "1rem",
  };

  return (
    <Box as="footer" bg="#181818" sx={estilofooter}>
      <Box textAlign="center">
        <Text
          as="h3"
          color="white"
          mb="1.3rem"
          fontSize={{ base: "1rem", xl: "1.5rem" }}
          lineHeight={{ xl: "3rem" }}
        >
          Enzo Burgos
        </Text>
        <Box fontSize="50px">
          <Redes />
        </Box>
        <Text
          fontSize={{ base: ".7rem", xl: "1rem" }}
          color="#AA8C55"
          mt="1.3rem"
          lineHeight={{ xl: "3rem" }}
        >
          © 2023 Enzo Burgos - Todos los derechos reservados
        </Text>
      </Box>
    </Box>
  );
};

export { Footer };
