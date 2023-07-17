import { Flex, Image } from '@chakra-ui/react';
import React from 'react';

import icono from '../../assets/fonts/icons8-base-de-datos.png'

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
        <Image src={icono} sx={estiloRedes}/>
        <Image src={icono} sx={estiloRedes}/>
        <Image src={icono} sx={estiloRedes}/>
        <Image src={icono} sx={estiloRedes}/>
        <Image src={icono} sx={estiloRedes}/>
        </Flex>
    )
}

export { Redes }