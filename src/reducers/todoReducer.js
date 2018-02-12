import * as types from 'actions/types'
import * as actions from 'actions'
import * as api from 'api'
import {
    collectFinishFetching,
    collectPending,
    getArchive,
    getNotArchive,
    removeItemFromList,
    updateItemInList
} from 'helpers'

// Specialized Action Creator
export const fetchAllTodos = () => dispatch => {
    dispatch(actions.getTodosPending())

    return api.getTodos()
        .then(todos => {
            dispatch(actions.getTodosFullfiled(todos))
        })
        .catch(err => dispatch(actions.getTodosRejected(err)))
}

export const fetchArchiveTodos = () => (dispatch, getState) => {
    dispatch(actions.getArchiveTodosPending())
    const { todos } = getState().todo
    if (todos.length) {
        return Promise.resolve(getArchive(todos))
    }
    return api.getTodos(true)
        .then(todos => {
            dispatch(actions.getArchiveTodosFullfiled(todos))
        })
        .catch(err => dispatch(actions.getArchiveTodosRejected(err)))
}

// export const fetchNotArchiveTodos = () => dispatch => {
//     dispatch(actions.getNotArchiveTodosPending())
//
//     api.getTodos(false)
//         .then(todos => {
//             dispatch(actions.getNotArchiveTodosFullfiled(todos))
//         })
//         .catch(err => dispatch(actions.getNotArchiveTodosRejected(err)))
// }

export const addTodo = value => dispatch => {
    dispatch(actions.addTodoPending())
    return api.addTodo(value)
        .then(todo => {
            dispatch(actions.addTodoFullfiled(todo))
        })
        .catch(err => dispatch(actions.addTodoRejected(err)))
}

export const updateTodo = todo => dispatch => {
    dispatch(actions.updateTodoPending())
    return api.updateTodo(todo)
        .then(todo => {
            dispatch(actions.updateTodoFullfiled(todo))
        })
        .catch(err => dispatch(actions.updateTodoRejected(err)))
}

export const removeTodo = id => dispatch => {
    dispatch(actions.removeTodoPending())
    return api.removeTodo(id)
        .then(todo => {
            dispatch(actions.removeTodoFullfiled(todo))
        })
        .catch(err => dispatch(actions.removeTodoRejected(err)))
}

const initialState = {
    isFetchingTodo:        false,
    isFetchedTodo:         false,
    isFailTodo:            null,
    isFetchingArchiveTodo: false,
    isFetchedArchiveTodo:  false,
    isFailArchiveTodo:     null,
    isFetchingAddTodo:     false,
    isFetchedAddTodo:      false,
    isFailAddTodo:         null,
    isFetchingUpdateTodo:  false,
    isFetchedUpdateTodo:   false,
    isFailUpdateTodo:      null,
    isFetchingRemoveTodo:  false,
    isFetchedRemoveTodo:   false,
    isFailRemoveTodo:      null,
    todos:                 [],
    todosNotArchive:       [],
    todosArchive:          [],
}

export default function todo(state = initialState, { type, payload }) {
    let finishFethcing
    switch (type) {
        case types.GET_TODOS_PENDING:
            return collectPending(state, 'isFetchingTodo')
        case types.GET_TODOS_FULLFILED:
        case types.GET_TODOS_REJECTED:
            finishFethcing = collectFinishFetching(state, 'isFetchingTodo')
        case types.GET_TODOS_FULLFILED:
            return finishFethcing({
                isFetchedTodo:   true,
                todos:           payload,
                todosNotArchive: getNotArchive(payload),
                todosArchive:    getArchive(payload)
            })
        case types.GET_TODOS_REJECTED:
            return finishFethcing({
                isFailTodo: payload
            })

        case types.ADD_TODO_PENDING:
            return collectPending(state, 'isFetchingAddTodo')
        case types.ADD_TODO_FULLFILED:
        case types.ADD_TODO_REJECTED:
            finishFethcing = collectFinishFetching(state, 'isFetchingAddTodo')
        case types.ADD_TODO_FULLFILED:
            return finishFethcing({
                isFetchedTodo:   true,
                todos:           [...state.todos, payload],
                todosNotArchive: [...state.todosNotArchive, payload],
            })
        case types.ADD_TODO_REJECTED:
            return finishFethcing({
                isFailAddTodo: payload
            })

        case types.UPDATE_TODO_PENDING:
            return collectPending(state, 'isFetchingUpdateTodo')
        case types.UPDATE_TODO_FULLFILED:
        case types.UPDATE_TODO_REJECTED:
            finishFethcing = collectFinishFetching(state, 'isFetchingUpdateTodo')
        case types.UPDATE_TODO_FULLFILED: {
            const todos = updateItemInList(payload, state.todos)
            return finishFethcing({
                isFetchedUpdateTodo: true,
                todos:               todos,
                todosNotArchive:     getNotArchive(todos),
                todosArchive:        getArchive(todos)
            })
        }
        case types.UPDATE_TODO_REJECTED:
            return finishFethcing({
                isFailUpdateTodo: payload
            })

        case types.REMOVE_TODO_PENDING:
            return collectPending(state, 'isFetchingRemoveTodo')
        case types.REMOVE_TODO_FULLFILED:
        case types.REMOVE_TODO_REJECTED:
            finishFethcing = collectFinishFetching(state, 'isFetchingRemoveTodo')
        case types.REMOVE_TODO_FULLFILED: {
            const todos = removeItemFromList(payload, state.todos)
            return finishFethcing({
                isFetchedRemoveTodo: true,
                todos:               todos,
                todosArchive:        getArchive(todos)
            })
        }
        case types.REMOVE_TODO_REJECTED:
            return finishFethcing({
                isFailRemoveTodo: payload
            })

        case types.GET_ARCHIVE_TODOS_PENDING:
            return collectPending(state, 'isFetchingArchiveTodo')
        case types.GET_ARCHIVE_TODOS_FULLFILED:
        case types.GET_ARCHIVE_TODOS_REJECTED:
            finishFethcing = collectFinishFetching(state, 'isFetchingArchiveTodo')
        case types.GET_ARCHIVE_TODOS_FULLFILED:
            return finishFethcing({
                isFetchedArchiveTodo: true,
                todosArchive:         payload
            })
        case types.GET_ARCHIVE_TODOS_REJECTED:
            return finishFethcing({
                isFailArchiveTodo: payload
            })
        // case types.GET_NOT_ARCHIVE_TODOS_PENDING:
        //     return {
        //         ...state,
        //         isFetchingNotArchive: true
        //     }
        // case types.GET_NOT_ARCHIVE_TODOS_FULLFILED:
        //     return {
        //         ...state,
        //         ...fetched
        //     }
        // case types.GET_NOT_ARCHIVE_TODOS_REJECTED:
        //     return {
        //         ...state,
        //     }
        default:
            return state
    }
}
