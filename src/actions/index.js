import * as types from './types'

export function getTodosPending() {
    return {
        type: types.GET_TODOS_PENDING,
    }
}

export function getTodosFullfiled(todos) {
    return {
        type:    types.GET_TODOS_FULLFILED,
        payload: todos
    }
}

export function getTodosRejected(reason = null) {
    return {
        type:    types.GET_TODOS_REJECTED,
        payload: reason
    }
}

export function getArchiveTodosPending() {
    return {
        type: types.GET_ARCHIVE_TODOS_PENDING,
    }
}

export function getArchiveTodosFullfiled(todos) {
    return {
        type:    types.GET_ARCHIVE_TODOS_FULLFILED,
        payload: todos
    }
}

export function getArchiveTodosRejected(reason = null) {
    return {
        type:    types.GET_ARCHIVE_TODOS_REJECTED,
        payload: reason
    }
}

// export function getNotArchiveTodosPending() {
//     return {
//         type: types.GET_TODOS_PENDING,
//     }
// }
//
// export function getNotArchiveTodosFullfiled(todos) {
//     return {
//         type:    types.GET_TODOS_FULLFILED,
//         payload: todos
//     }
// }
//
// export function getNotArchiveTodosRejected(reason = null) {
//     return {
//         type:    types.GET_TODOS_REJECTED,
//         payload: reason
//     }
// }

export function addTodoPending() {
    return {
        type: types.ADD_TODO_PENDING,
    }
}

export function addTodoFullfiled(todo) {
    return {
        type:    types.ADD_TODO_FULLFILED,
        payload: todo
    }
}

export function addTodoRejected(reason = null) {
    return {
        type:    types.ADD_TODO_REJECTED,
        payload: reason
    }
}

export function updateTodoPending() {
    return {
        type: types.UPDATE_TODO_PENDING,
    }
}

export function updateTodoFullfiled(todo) {
    return {
        type:    types.UPDATE_TODO_FULLFILED,
        payload: todo
    }
}

export function updateTodoRejected(reason = null) {
    return {
        type:    types.UPDATE_TODO_REJECTED,
        payload: reason
    }
}

export function removeTodoPending() {
    return {
        type: types.REMOVE_TODO_PENDING,
    }
}

export function removeTodoFullfiled(todo) {
    return {
        type:    types.REMOVE_TODO_FULLFILED,
        payload: todo
    }
}

export function removeTodoRejected(reason = null) {
    return {
        type:    types.REMOVE_TODO_REJECTED,
        payload: reason
    }
}
