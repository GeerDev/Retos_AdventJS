function getGiftsToRefill(a1, a2, a3) {

    const filtrado = [...a1,...a2,...a3].filter((a, index) => [...a1,...a2,...a3].indexOf(a) === index)
    .filter(e => a1.includes(e) + a2.includes(e) + a3.includes(e) === 1)
      
    return filtrado
  }