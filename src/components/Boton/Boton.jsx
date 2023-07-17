import React from "react";
import { Button } from "@chakra-ui/react";

const Boton = ({ text }) => {
  const estiloboton = {
    bg: "white",
  };

  return (
    <>
      <Button sx={estiloboton}> {text} </Button>
    </>
  );
};

export { Boton };
