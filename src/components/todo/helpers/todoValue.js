const hendleValue = (value = value.trim()) =>
  /^\S[^\-().^+%$&*@!><=-_/,%"':;]+$/g.test(value)

export {
  hendleValue
}