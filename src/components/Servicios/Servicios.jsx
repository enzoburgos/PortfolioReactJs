import { Box, Flex, Text } from "@chakra-ui/react";
import { Card } from "../../components";

const Servicios = () => {
  // ---------estilos--------
  const estiloservicios = {
    width: "83%",
    margin: "0 auto",
    pt: {base:'3.5rem', md:"5.5em"},
    pb: {base:'3.5rem',md:"5.5em"}
  };

const estiloflex = {

  flexWrap:{base:'nowrap', md:'wrap'},
  columnGap:'.9rem',
  rowGap:'1.5rem', 
  overflow:{base:'scroll', md:'visible'},
  height:{base:'10%',md:'100%'},
  width:{base:'400vw',md:'100%'}

}

  // --------props---------
  const servicios = [
    {
      img: "desarrollo-web",
      titulo: "Desarrollo Web",
      descripcion:
        "Me especializo en la creación de sitios web, aplicaciones e interfaces de fácil interacción para los visitantes y usuarios.",
    },
    {
      img: "desarrollo-movil",
      titulo: "Desarrollo Movil",
      descripcion:
        "Diseño, desarrollo e implemento aplicaciones móviles.Además soluciono problemas y depuro la aplicación para optimizar su rendimiento.",
    },
    {
      img: "desarrollo-web",
      titulo: "Diseño Responsive",
      descripcion:
        "Me encargo de buscar la correcta visualización de una misma página en distintos dispositivos, ya sea en PC de Escritorio, Tablets o Celulares",
    },
    {
      img: "base-de-datos",
      titulo: "Base de datos",
      descripcion:
        "Otra de las funciones que empleo es la creación de base de datos y servidores eficientes. Ademas domino el manejo de software de almacenamiento.",
    },
    {
      img: "optimizacion",
      titulo: "Optimización del Sitio",
      descripcion:
        "Utilizando herramientas y estrategias, monitoreo y actualizo los sistemas para asi mejorar el rendimiento de la pagina.",
    },
    {
      img: "gestión-de-proyectos",
      titulo: "Gestión de Proyectos",
      descripcion:
        "Poseo una mirada mas comprensiva y panorámica de todo el proceso de creación y monitoreo de aplicaciones y páginas web.",
    },
  ];

  return (
    <Box as="section" id="servicios" bg="#0A0A0A" >
      <Box sx={estiloservicios}>
        <Text
          as="h2"
          fontSize={25}
          textAlign="center"
          color="#878787"
          mb={{base:'1.5rem',md:"3rem"}}
        >
          Servicios
        </Text>
        <Flex sx={estiloflex}>
          {servicios.map((serv) => (
            <Card
              titulo={serv.titulo}
              descripcion={serv.descripcion}
              img={serv.img}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export { Servicios };
