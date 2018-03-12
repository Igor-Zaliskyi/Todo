const isValidValue = value => {
  const valueAddTrim = value.trim();
  const testValue = /^[^().^+$&*@!><=-_/,%"'№:;#]+$/g.test(valueAddTrim)

  return testValue
}

export {isValidValue}
