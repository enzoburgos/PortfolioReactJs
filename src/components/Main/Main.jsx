import React from 'react';
import { Box } from '@chakra-ui/react';
import { Contactame, Inicio, Portfolio, Servicios, Sobremi } from '../../components'


const Main = () => {
    return(
        <Box as='main'>
        <Inicio/>
        <Sobremi/>
        <Servicios/>
        <Portfolio/>
        <Contactame/>
        </Box>
    )
}

export { Main }