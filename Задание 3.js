//Задание 3

function example(number) {
  return function (number2 = 2) {
    return number + number2
  }
}

const resultFunc = example(1)

console.log(resultFunc())