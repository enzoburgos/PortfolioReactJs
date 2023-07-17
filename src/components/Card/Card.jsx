import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const Card = ({titulo,descripcion, img}) => {

const estilocard= {

  color:'white'

}

  return (
    <Box sx={estilocard}>
        <Image width='10' src={require(`../../assets/imagenes/${img}.png`)}/>
        <Text as='h2'>{titulo}</Text>
        <Text>{descripcion}</Text>
    </Box>
  );
};

export { Card };
