import React from "react";
import { Button } from "@chakra-ui/react";

const Boton = ({ text, bg, color }) => {
  const estiloboton = {
    p:'.4rem 2rem',
    color: `${color}`,
    bg : `${bg}`,
    borderRadius: "2",
    transition: "all 0.3s ease",
    ':hover':{
      bg:'#AA8C55',
      color:'white'
    }

  };

  return (
  <Button sx={estiloboton} variant="unstyled"> {text} </Button>

  )
};

export { Boton };
