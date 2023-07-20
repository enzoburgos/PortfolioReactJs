import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const Card = ({ titulo, descripcion, img }) => {
  const estilocard = {
    color: "white",
    border: "#0A0A0A 1px solid",
    bg: "#121212",
    borderBottom: "#AA8C55 2px solid",
    p: "2.2rem 1.3rem",
    width: "32.1%",
    // height:'auto'
  };

  const estiloicono = {
    width: "10",
    ml: "-.3rem",
    mb:'.5rem'
  };


  return (
    <Box sx={estilocard}>
      <Image
        sx={estiloicono}
        src={require(`../../assets/fonts/icons8-${img}.png`)}
      />
      <Text as="h2" lineHeight='2.5rem'>{titulo}</Text>
      <Text fontSize=".8rem" color="#878787">
        {descripcion}
      </Text>
    </Box>
  );
};

export { Card };
