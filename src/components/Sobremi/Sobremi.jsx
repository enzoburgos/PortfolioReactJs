import { Box, Flex, Image, Text } from "@chakra-ui/react";

import perfil from "../../assets/img/fotoperf.png";


const Sobremi = () => {
  // ---------estilos----------
  const estiloinfo = {
    p: "5.5rem 6rem 6rem 5.5rem",
    bg: "#181818",
    color: "#878787", 
    width:"50%"
  };

  return (
    <Flex id="sobre-mi" as="section">
      <Box sx={estiloinfo}>
        <Text as="h2" fontSize="25" pb="1rem">
          Sobre Mi
        </Text>
        <Text color={{base:'pink', md:'red', xl:'black' }}>
          Soy Técnico Electrónico con ganas de aprender más el mundo de la
          programación, me gusta viajar por el mundo y experimentar nuevos
          retos, tengo conocimientos y habilidades en front-end y back-end,
          utilizo herramientas como HTML, CSS, Javascript, React Js, Node Js,
          MySQL, MongoDB y Oracle.
        </Text>
      </Box>
      <Box width="50%">
        <Image src={perfil} width="100%" height="100%" objectFit="cover" />
      </Box>
    </Flex>
  );
};

export { Sobremi };
