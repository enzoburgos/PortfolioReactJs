import { Box, Link } from "@chakra-ui/react";

const Navbar = () => {

// ------estilos------

  const estilolink = {
    
    color:'#878787',
    fontSize:'1rem',
    p: '1.15rem 1rem 0.9rem 1rem',
    
  };

  return (
    <Box as="nav" pr='2rem'>

      <Link sx={estilolink} href="#inicio">Inicio</Link>
      <Link sx={estilolink} href="#sobre-mi" >Sobre Mi</Link>
      <Link sx={estilolink} href="#servicios" >Servicios</Link>
      <Link sx={estilolink} href="#portfolio" >Proyectos</Link>

    </Box>
  );
};

export { Navbar };