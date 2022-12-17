function fixLetter(letter) {
  let var1 = letter.trim()
  if (var1[var1.length - 1] !== "." && var1[var1.length - 1] !== "?" && var1[var1.length - 1] !== "!") {
    var1 += "."
  }
  const var3 = var1.replace(/\s+/g, ' ').split('')
  var3.forEach((element,i) => {
    if ((element === '.' || element === ',' || element === '?') && var3[i - 1] === ' ') {
      var3.splice(i - 1, 1)
    }
  })
  var3.forEach((element,i) => {
    if(element === '?' && var3[i + 1] === '?') {
      var3.splice(i + 1, 1)
    }
  })
  var3.forEach((element,i) => {
    if(element === ','  && var3[i + 1] !== ' ') {
      var3.splice(i + 1, 0, ' ')
    }
  })
  var3.forEach((element,i) => {
      if ((element === '?' || element === '!' || element === '.') && var3[i + 2] !== undefined) {
      var3[i + 2] = var3[i + 2].toUpperCase()
    }
  })
  const var4 = var3.join("")[0].toUpperCase() + var3.join("").substring(1)
  const var5 = var4.replace(/santa claus/ig, "Santa Claus")
  return var5
}