import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

import icono from '../../assets/fonts/icons8-base-de-datos.png'

// import { PhoneIcon} from '@chakra-ui/icons'


const Info = ({ titulo, info }) => {
  return (
    <>
      <Text as="h3">{titulo}</Text>
      <Flex>
        <Image src={icono} width='5'/>
        <Text>{info}</Text>
      </Flex>
    </>
  );
};

export { Info };
