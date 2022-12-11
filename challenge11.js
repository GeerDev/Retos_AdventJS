function getCompleted(part, total) {
    const array = [36000,3600,600,60,10,1]
    
    const variable1 = part.split(":").join("").split("")
    const mapeo1 = variable1.map((element,index) => {
      return element * array[index]
    })
    const variable2 = total.split(":").join("").split("")
    const mapeo2 = variable2.map((element,index) => {
      return element * array[index]
    })
    const resultado1 = mapeo1.reduce((a,b) => a + b, 0)
    const resultado2 = mapeo2.reduce((a,b) => a + b, 0)
    
    const gcd = (a, b) => !b ? a : gcd(b, a % b)
    
    const paDividir = gcd(resultado1, resultado2)
    
    return `${resultado1/paDividir}/${resultado2/paDividir}`
  }