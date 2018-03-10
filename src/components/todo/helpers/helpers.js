const validationInput = (value = value.trim()) =>
  /^[^().^+$&*@!><=-_/,%"'№:;#]+$/g.test(value)

export {
  validationInput
}
