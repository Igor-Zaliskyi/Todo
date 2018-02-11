import React from 'react'
import ReactDOM from 'react-dom'
import Root from './container/Root'
import { configureStore, history } from './configureStore'
import './sass/index.scss'

const store = configureStore()

ReactDOM.render(
    <Root store={store} history={history} />,
    document.getElementById('todo-app')
)
