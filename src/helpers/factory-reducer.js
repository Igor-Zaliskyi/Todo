export const collectPending = (state, pendingKey) => ({
    ...state,
    [pendingKey]: true
})

export const collectFinishFetching = (state, pendingKey) => newState => ({
    ...state,
    [pendingKey]: false,
    ...newState
})
