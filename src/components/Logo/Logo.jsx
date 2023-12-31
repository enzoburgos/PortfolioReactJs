import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Logo = () => {


  // ------estilos------
  const estilologo = {
    color: "#AA8C55",
    fontSize: { base: "20", xl: "35" },
  };
  
  return (
    <Box as="logo">
      <Text as="h2" sx={estilologo}>
        ENZO BURGOS
      </Text>
    </Box>
  );
};

export { Logo };
