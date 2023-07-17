import React from "react";

import { Text, Box } from "@chakra-ui/react";
import { Redes } from '../../components'

const Footer = () => {
  return (
    <Box as="footer" bg='lightblue'>
      <Box textAlign="center">
        <Text as="h3">Enzo Burgos</Text>
        <Redes />
        <Text>© 2023 Enzo Burgos - Todos los derechos reservados</Text>
      </Box>
    </Box>
  );
};

export { Footer };