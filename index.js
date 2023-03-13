/* const arrayVazia = [];

console.log(arrayVazia)
console.log(arrayVazia.lenght) */

////
/* const arrayVazia = [];

console.log(arrayVazia[0]) */

////
/* const arrayVazia = [,,,];
console.log(arrayVazia.length)
console.log(arrayVazia[0])
console.log(arrayVazia[1])
console.log(arrayVazia[2]) */

////
/* const arrayVazia = [,,,];
console.log(arrayVazia.length)
arrayVazia.push(50)
console.log(arrayVazia)
console.log(arrayVazia.length) */

////
/* const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat("André", "Fernanda")

console.log(arrayConcat)
console.log(arrayOriginal) */

////
/* const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])

console.log(arrayConcat)
console.log(arrayOriginal) */

////
// const arrayOriginal = [50, 60, 70]
// const arrayConcat = arrayOriginal.concat([80, [90, 100]])

// console.log(arrayConcat)
// console.log(arrayOriginal)

////
// const arrayNums = [1, 2, 3, 4]

// function multiplicaPorDez(num) {
//     return num * 10
//    }
//    const arraySomada = arrayNums.map(multiplicaPorDez)

//    console.log(arraySomada)

////
const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acc, atual) => atual + acc, 0)

console.log(soma) //170