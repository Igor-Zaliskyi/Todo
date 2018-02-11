export const collectPending = (state, pendingKey) => ({
    ...state,
    [pendingKey]: true
})

export const collectFinishFetching = (state, pendingKey) => ({
    ...state,
    [pendingKey]: false
})

export const collectFullfiled = (state, fullfiledKey, payload) => ({
    ...state,
    [fullfiledKey]: true,
    ...payload
})

export const collectRejected = (state, rejection) => ({
    ...state,
    ...rejection
})
