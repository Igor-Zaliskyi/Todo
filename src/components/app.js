import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import { Archive, Home } from 'routes'
import logo from 'img/logo.png'

const App = () => (
    <Fragment>
        <img src={logo} alt="Logo" />
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/archive">Archive</Link></li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/archive" component={Archive} />
    </Fragment>
)

export default App
