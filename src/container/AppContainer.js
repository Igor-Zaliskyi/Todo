import React, { Fragment } from 'react'
import { Todos } from 'components'
import logo from 'img/logo.png'

const AppContainer = () => (
    <Fragment>
        <img src={logo} alt="Logo" />
        <Todos />
    </Fragment>
)

export default AppContainer
