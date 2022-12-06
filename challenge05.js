function getMaxGifts(giftsCities, maxGifts, maxCities) {
    console.log(...giftsCities.reduce((a, c) => [...a, ...a.map((e) => [...e, ...[c]])], [[]]))
    return Math.max(
        ...giftsCities
          .reduce((a, c) => [...a, ...a.map((e) => [...e, ...[c]])], [[]])
          .filter((e) => e.length <= maxCities)
          .map((arr) => arr.reduce((a, c) => a + c, 0))
          .filter((n) => n <= maxGifts)
        )
  }

const resultado = getMaxGifts([12, 3, 11, 5, 7], 20, 3)
console.log("Este es el resultado: ", resultado)

// Entender lo que está pasando en el reduce
console.log("Paso 1", [...[[]], ...[[]].map((e) => [...e, ...[12]])])

console.log("Paso 2", [...[[],[12]], ...[[],[12]].map((e) => [...e, ...[3]])])

console.log("Paso 3", [...[[], [ 12 ], [ 3 ], [ 12, 3 ]], ...[[], [ 12 ], [ 3 ], [ 12, 3 ]].map((e) => [...e, ...[11]])])

const pruebaSpreadRest = [9, 8, 7, 6]
console.log(pruebaSpreadRest)
console.log(pruebaSpreadRest.filter(a => a > 6))
// Valiosa lección de el operador spread/rest -> Esto de abajo no se puede hacer porque los valores del operador Spread/Rest necesitan ir en una 
// estructura de datos superior.
// const hhh = ...pruebaSpreadRest.filter(a => a > 6) NO
const filtrado = [...pruebaSpreadRest].filter(a => a > 6)
const filtrado2 = [...pruebaSpreadRest.filter(a => a > 6)]
console.log(filtrado, filtrado2);