import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Boton } from '../../components'

const Inicio = () => {

// ------estilos-------
const estiloinicio={
    bg:'lightgreen'
}

    return(
        <Box sx={estiloinicio}>
        <Text fontSize="2vw">Mi Nombre es</Text>
        <Text fontSize="6vw">Enzo Burgos</Text>
        <Text fontSize="2vw">Soy un Full Stack Developer </Text>
        <Boton text="Ver Trabajos" />
        <Boton text="Contratame" />
      </Box>
    )
}

export { Inicio }