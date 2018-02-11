import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import todo from './todoReducer'

const rootReducer = combineReducers({
    routing,
    todo
})

export default rootReducer
