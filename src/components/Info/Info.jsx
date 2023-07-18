import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Info = ({ titulo, info, icono }) => {

const estiloiconos = {

color:'white',
fontSize:'.9rem'

}

  return (
    <Box>
      <Text as="h3" color='#AA8C55' mb='.2rem'>{titulo}</Text>
      <Flex textAlign='center' gap='.3rem'>
        <i class={icono} style={estiloiconos} ></i>
        <Text color='#878787' fontSize='.8rem'>{info}</Text>
      </Flex>
    </Box>
  );
};

export { Info };
