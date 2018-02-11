const apiEndPoint = 'http://localhost:4000/api/todos'
const headers = new Headers()

headers.append('Accept', 'application/json')
headers.append('Content-Type', 'application/json')

const responseToJson = res => res.json()

const addTodo = value => fetch(apiEndPoint, {
    method: 'POST',
    body:   JSON.stringify({ value }),
    headers
})
    .then(responseToJson)

const removeTodo = id => fetch(apiEndPoint, {
    method: 'DELETE',
    body:   JSON.stringify({ id }),
    headers
})
    .then(responseToJson)

const updateTodo = todo => fetch(apiEndPoint, {
    method: 'PATCH',
    body:   JSON.stringify(todo),
    headers
})
    .then(responseToJson)

const getTodos = archive => fetch(`${apiEndPoint}${archive !== undefined ? '?archive=' + +archive : ''}`)
    .then(responseToJson)

export {
    addTodo,
    removeTodo,
    updateTodo,
    getTodos
}
