const hendleValue = (value = value.trim()) => value
  .match(/^[\wа-яфві]+/i)
  
export {hendleValue}

