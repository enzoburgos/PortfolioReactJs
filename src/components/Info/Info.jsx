import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

import logo from '../../assets/imagenes/logo192.png'

const Info = ({ titulo, info }) => {
  return (
    <>
      <Text as="h3">{titulo}</Text>
      <Flex>
        <Image src={logo} width='5'/>
        <Text>{info}</Text>
      </Flex>
    </>
  );
};

export { Info };
