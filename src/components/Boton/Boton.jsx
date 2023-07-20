import React from "react";
import { Button } from "@chakra-ui/react";

const Boton = ({ text, bg, color }) => {
  const estiloboton = {
    p: { base: ".4rem 2rem", xl: "1rem 4rem 4rem 4rem" },
    color: `${color}`,
    bg: `${bg}`,
    borderRadius: "4px",
    transition: "all 0.3s ease",
    ":hover": {
      bg: "#AA8C55",
      color: "white",
    },
    fontSize: { xl: "2rem" },
  };

  return (
    <Button sx={estiloboton} variant="unstyled">
      {text}
    </Button>
  );
};

export { Boton };
