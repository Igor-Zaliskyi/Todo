import createHistory from 'history/createBrowserHistory'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import rootReducer from 'reducers/index'

export const history = createHistory()
const middleware = routerMiddleware(history)

export function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(middleware, thunk)
        )
    )
}
