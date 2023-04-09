function numbersInOrder(a, b) {
  const intervalId = setInterval(
    function () {
      console.log(a++)
      if (a > b) clearInterval(intervalId)
    },
    1000,
    a,
    b
  )
}

intUser(5, 15)