import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

import icono from '../../assets/fonts/icons8-base-de-datos.png'

// import { PhoneIcon} from '@chakra-ui/icons'


const Info = ({ titulo, info }) => {
  return (
    <Box>
      <Text as="h3" color='#AA8C55' mb='.2rem'>{titulo}</Text>
      <Flex>
        <Image src={icono} width='5' mr='.3rem'/>
        <Text color='#878787' fontSize='.8rem'>{info}</Text>
      </Flex>
    </Box>
  );
};

export { Info };
