import { Box, Flex, Input } from "@chakra-ui/react";
import React from "react";

const Formulario = () => {
  return (
    <Box>
      <Flex>
        <Input variant="outline" placeholder="Nombre" />
        <Input variant="outline" placeholder="Email" />
      </Flex>
      
      <Input variant="outline" placeholder="Asunto" />
      <Input variant="outline" placeholder="Mensaje" />
    </Box>
  );
};

export { Formulario };
