//Задание 1

function checkParity(arr) {
  let check = true
  for (let i = 1; i < arr.length; i++) {
    if (arr[0] != arr[i]) {
      check = false
    }
  }
  console.log(check)
}

let arr = [1, 1, 1, 1]

checkParity(arr)