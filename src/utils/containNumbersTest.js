function containNumbersTest(string) {
  const regex = /^[0-9]*$/

  if (regex.test(string)) {
    return true
  }

  return false
}

export default containNumbersTest
