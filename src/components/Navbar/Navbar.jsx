import { Box, Link } from "@chakra-ui/react";

const Navbar = () => {


  // ------estilos------
  const estilolink = {
    color: "#878787",
    fontSize: { base: "1rem", xl: "1.9rem" },
    p: { base: "1.15rem 1rem 0.9rem 1rem", xl: "1.7rem 2rem 1.6rem 2rem" },
    transition: "all 0.3s",
    ":hover": {
      bg: "#AA8C55",
      color: "white",
    },
  };

  return (
    <Box as="nav" pr="2rem" mt=".2rem">
      <Link sx={estilolink} style={{ textDecoration: "none" }} href="#inicio">
        Inicio
      </Link>
      <Link sx={estilolink} style={{ textDecoration: "none" }} href="#sobre-mi">
        Sobre Mi
      </Link>
      <Link
        sx={estilolink}
        style={{ textDecoration: "none" }}
        href="#servicios"
      >
        Servicios
      </Link>
      <Link
        sx={estilolink}
        style={{ textDecoration: "none" }}
        href="#portfolio"
      >
        Proyectos
      </Link>
    </Box>
  );
};

export { Navbar };
