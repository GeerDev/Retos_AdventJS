function countHours(year, holidays) {
    let acumulador = 0
    holidays.forEach(element => {
      const dia = new Date(`${element}/${year}`).getDay()
      if ([1,2,3,4,5].includes(dia)) {
        acumulador++
      }
    })  
    return acumulador * 2
  }