import { Flex, Image } from '@chakra-ui/react';
import React from 'react';

import logo from '../../assets/imagenes/logo192.png'

const Redes = () => {

const estiloRedes = {

// --------estilos--------
    border : '1px',
    p: 2,
    width:'40px',
    height: '40px'

}
    return(
        
        <Flex justifyContent='center'>
        <Image src={logo} sx={estiloRedes}/>
        <Image src={logo} sx={estiloRedes}/>
        <Image src={logo} sx={estiloRedes}/>
        <Image src={logo} sx={estiloRedes}/>
        <Image src={logo} sx={estiloRedes}/>
        </Flex>
    )
}

export { Redes }