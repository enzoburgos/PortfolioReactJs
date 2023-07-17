import { Box, Link } from "@chakra-ui/react";

const Navbar = () => {

// ------estilos------
  const estilolink = {
    
    fontSize: 20,
    color:'white'
    
  };

  return (
    <Box as="nav">

      <Link sx={estilolink} href="#inicio" >Inicio</Link>
      <Link sx={estilolink} href="#sobre-mi" >Sobre Mi</Link>
      <Link sx={estilolink} href="#servicios" >Servicios</Link>
      <Link sx={estilolink} href="#portfolio" >Proyectos</Link>

    </Box>
  );
};

export { Navbar };