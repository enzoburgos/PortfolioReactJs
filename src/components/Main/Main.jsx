import React from 'react';

import { Contactame, Inicio, Portfolio, Servicios, Sobremi } from '../../components'

const Main = () => {
    return(
        <>
        <Inicio/>
        <Sobremi/>
        <Servicios/>
        <Portfolio/>
        <Contactame/>
        </>
    )
}

export { Main }