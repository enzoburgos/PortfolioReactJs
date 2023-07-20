import { Box, Flex, Image, Text } from "@chakra-ui/react";

import perfil from "../../assets/img/fotoperf.png";

const Sobremi = () => {

  
  // ---------estilos----------
  const estiloinfo = {
    bg: "#181818",
    color: "#878787",
    width: { base: "100%", md: "50%" },
    p: {
      base: "2rem",
      md: "4rem",
      lg: "5.5rem 6rem 6rem 5.5rem",
      xl: "10.5rem",
    },
    textAlign: { base: "center", md: "left" },
  };

  return (
    <>
      <Flex
        id="sobre-mi"
        as="section"
        direction={{ base: "column-reverse", md: "row", lg: "row", xl: "row" }}
      >
        <Box sx={estiloinfo}>
          <Text as="h2" fontSize={{ base: "25", xl: "3rem" }} pb="1rem">
            Sobre Mi
          </Text>
          <Text fontSize={{ base: "1rem", xl: "2rem" }}>
            Soy Técnico Electrónico con ganas de aprender más el mundo de la
            programación, me gusta viajar por el mundo y experimentar nuevos
            retos, tengo conocimientos y habilidades en front-end y back-end,
            utilizo herramientas como HTML, CSS, Javascript, React Js, Node Js,
            MySQL, MongoDB y Oracle.
          </Text>
        </Box>
        <Box width={{ base: "100%", md: "50%" }}>
          <Image src={perfil} width="100%" height="100%" objectFit="cover" />
        </Box>
      </Flex>
    </>
  );
};

export { Sobremi };
