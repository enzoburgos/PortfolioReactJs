import React from "react";
import { Box, Button, Flex } from '@chakra-ui/react'

import { Logo, Navbar } from '../../components'

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

const estiloboton = {

  color:'white',
  bg:'#AA8C55',
  borderRadius:'1px solid black',
  p:'0 1rem'

}

  return (
    <Box as="header" sx={estiloheader}>
      <Logo />
      <Flex alignItems='center' > 
      <Navbar />
      <Button variant="unstyled" sx={estiloboton} >Contáctame</Button>
      </Flex>
    </Box>
  );
};

export { Header };
