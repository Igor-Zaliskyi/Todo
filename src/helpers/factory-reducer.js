import { curry } from 'ramda'

export const collectPending = (state, pendingKey) => ({
    ...state,
    [pendingKey]: true
})

export const collectFinishFetching = curry((state, pendingKey, newState) => ({
    ...state,
    [pendingKey]: false,
    ...newState
}))
