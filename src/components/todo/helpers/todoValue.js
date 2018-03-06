const hendleValue = (value) => {
  const valInput = Array.of(value)
    .map(todo => todo.trim())
    .filter(todo => {
       const reg = /q|w|e|r|t|y|u|i|o|p|a|s|d|g|h|j|k|l|z|x|c|v|b|n|m|1|2|3|4|5|6|7|8|9|0/i
        const todos = reg.test(todo)  
         return todos
       } )
 return valInput
}

export {
  hendleValue
}