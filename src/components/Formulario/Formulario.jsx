import { Box, Input, Flex, Button } from "@chakra-ui/react";
import React from "react";

const Formulario = () => {
  const estiloinput = {
    "::placeholder": {
      color: "#878787",
    },
    bg: "#181818",
    color: "white",
    borderRadius: ".1rem",
    pl: "1rem",
    pt: ".5rem",
  };

  return (
    <Box width="58%">
      <Flex gap=".8rem" mb="1rem">
        <Input
          placeholder="Nombre"
          variant="unstyled"
          width="auto"
          sx={estiloinput}
          pb= ".5rem"
        />
        <Input
          placeholder="Email"
          variant="unstyled"
          width="68%"
          sx={estiloinput}
          pb='.5rem'
        />
      </Flex>

      <Input
        placeholder="Asunto"
        variant="unstyled"
        mb="1rem"
        sx={estiloinput}
        pb='.5rem'
      />
      <Input
        placeholder="Mensaje"
        variant="unstyled"
        mb="1rem"
        sx={estiloinput}
        pb='5rem'
      />
      <Button
        bg="#AA8C55"
        color="white"
        p=".5rem 2.5rem"
        borderRadius=".2rem"
        border="1px #AA8C55 solid"
      >
        Enviar
      </Button>
    </Box>
  );
};

export { Formulario };
