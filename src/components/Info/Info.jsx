import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Info = ({ titulo, info, icono }) => {

const estiloiconos = {

color:'white',
// : {base: '.9rem', xl:'5rem'}
pt:{xl:'10rem'}
}

  return (
    <Box>
      <Text as="h3" color='#AA8C55' mb='.2rem' fontSize={{base:'1rem', xl:'2rem'}}>{titulo}</Text>
      <Flex textAlign='center' gap='.3rem'>
        <i class={icono} style={estiloiconos}></i>
        <Text color='#878787' fontSize={{base:'.8rem', xl:'1.5rem'}}>{info}</Text>
      </Flex>
    </Box>
  );
};

export { Info };
