import React from "react";
import { Box, Flex } from '@chakra-ui/react'

import { Boton, Logo, Navbar } from '../../components'

const Header = () => {

// ----------estilos----------
const estiloheader = {
    height : '3.5rem',
    bg: '#181818',
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    width: '100%',
    justifyContent: 'space-between',
    pr:'5.5rem',
    pl:'5.5rem'
    // ':hover': {
    //   bg: 'lightpink',
    // }
}
  return (
    <Box as="header" sx={estiloheader}>
      <Logo />
      <Flex alignItems='center'> 
      <Navbar />
      <Boton text="Contáctame" />
      </Flex>
    </Box>
  );
};

export { Header };
