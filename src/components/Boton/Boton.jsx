import React from "react";
import { Button } from "@chakra-ui/react";

const Boton = ({ text, bg }) => {
  const estiloboton = {
    pr: ".7rem",
    pl: ".7rem",
    color: 'white',
    // bg: "#AA8C55",
    bg : `${bg}`,
    borderRadius: ".1rem",
  };

  return (
  <Button sx={estiloboton} variant="unstyled"> {text} </Button>

  )
};

export { Boton };
