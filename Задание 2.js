/Задание 2

function prime(number) {
  if (number > 1000) {
    return "Данные неверны"
  } else {
    for (i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0) return "Это число не простое"
    }
    return "Это число простое"
  }
}

console.log(prime(15))
console.log(prime(13))
console.log(prime(1500))