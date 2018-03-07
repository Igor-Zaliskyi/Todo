const hendleValue = (value) => Array.of(value)
  .filter(todo => todo.match(/^[\d\wа-я]+$/gi))

export {hendleValue}
