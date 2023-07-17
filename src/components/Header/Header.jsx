import React from "react";
import { Box } from '@chakra-ui/react'

import { Boton, Logo, Navbar } from '../../components'

const Header = () => {

// ----------estilos----------
const estiloheader = {
    bg: 'lightblue',
    // color: 'black',
    // height: '3.4em',
    // display: 'flex',
    // alignItems:'center',
    // justifyContent:'space-between',
    // ':hover': {
    //   bg: 'lightpink',
    // }
}
  return (
    <Box as="header" sx={estiloheader}>
      <Logo />
      <Navbar />
      <Boton text="Contáctame" />
    </Box>
  );
};

export { Header };
