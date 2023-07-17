import React from "react";
import { Button } from "@chakra-ui/react";

const Boton = ({ text }) => {
  const estiloboton = {
    pr: ".7rem",
    pl: ".7rem",
    color: "white",
    bg: "#AA8C55",
    borderRadius: ".1rem",
  };

  return <Button sx={estiloboton}> {text} </Button>;
};

export { Boton };
