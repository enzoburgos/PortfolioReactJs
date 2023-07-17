import { Box, Image, Text } from "@chakra-ui/react";

import perfil from "../../assets/img/fotoperf.png";

const Sobremi = () => {
  const estilosobremi = {
    bg: "lightyellow",
    display: "flex",
  };

  return (
    <Box id="sobre-mi" as="section" sx={estilosobremi}>
      <Box>
        <Text as="h2" fontSize={25}>Sobre Mi</Text>
        <Text>
          Soy Técnico Electrónico con ganas de aprender más el mundo de la
          programación, me gusta viajar por el mundo y experimentar nuevos
          retos, tengo conocimientos y habilidades en front-end y back-end,
          utilizo herramientas como HTML, CSS, Javascript, React Js, Node Js,
          MySQL, MongoDB y Oracle.
        </Text>
      </Box>
      <Box>
        <Image src={perfil} />
      </Box>
    </Box>
  );
};

export { Sobremi };
