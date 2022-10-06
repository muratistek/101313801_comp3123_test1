// Student Name: Hamza Murat Istek
// Student ID: 101313801

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

function lowerCaseWords(arr) {
  return new Promise((resolve, reject) => {
    if (arr.length === 0) {
      reject("Invalid Array")
    }
    resolve(
      arr.filter(element => typeof element === "string").map(arrString => arrString.toLowerCase())
    )
  })
}

lowerCaseWords(mixedArray).then(res => { console.log(res) }, err => console.log(err)) 