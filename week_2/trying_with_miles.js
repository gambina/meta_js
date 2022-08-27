try {
  throw new ReferenceError()
  console.log(a + b)
}
catch (err) {
  console.log(err)
  //console.log('This error is catched')
  //console.log('We live in a society')
}