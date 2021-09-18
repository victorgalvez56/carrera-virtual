import React, { useState, useEffect } from 'react'
import HomeBanner from '../components/HomeBanner'
import SignupForm from '../components/SignupForm'
import Backbutton from '../components/elements/Backbutton'


function Tips() {

    return (
        <div>
            <Backbutton />
            <HomeBanner type='slim' />
            <iframe class="styles-iframe" src="https://eventrid.cl/lixsys/eventos/evento-mixto-6/inscripciones/seleccion_tickets/iframe_eventrid"></iframe>

        </div>
    )
}

export default Tips;
