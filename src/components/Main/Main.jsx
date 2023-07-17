import React from 'react';

import { Inicio, Portfolio, Servicios, Sobremi } from '../../components'

const Main = () => {
    return(
        <>
        <Inicio/>
        <Sobremi/>
        <Servicios/>
        <Portfolio/>
        </>
    )
}

export { Main }