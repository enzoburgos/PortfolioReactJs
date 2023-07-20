import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const Card = ({ titulo, descripcion, img }) => {
  const estilocard = {
    color: "white",
    border: "#0A0A0A 1px solid",
    bg: "#121212",
    borderBottom: "#AA8C55 2px solid",
    p: { base: "2.2rem 1.3rem", xl: "4.4rem 2.6rem" },
    width:{base:'100%' ,md:'48.8%', lg:'26.2vw' },
   
  };

  const estiloicono = {
    width: { base: "10", xl: "20" },
    ml: "-.4rem",
    mb: ".5rem",
  };

  return (
    <>
    <Box sx={estilocard}>
      <Image
        sx={estiloicono}
        src={require(`../../assets/fonts/icons8-${img}.png`)}
      />
      <Text
        as="h2"
        lineHeight={{ base: "2.5rem", xl: "5rem" }}
        fontSize={{ base: "1rem", xl: "2rem" }}
      >
        {titulo}
      </Text>
      <Text fontSize={{ base: ".8rem", xl: "1.5rem" }} color="#878787">
        {descripcion}
      </Text>
    </Box>
    </>
  );
};

export { Card };
