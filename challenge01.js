function wrapping(gifts) {
    const giftsMap = gifts.map(e => {
      const acumulador = "*".repeat(e.length + 2);
      return `${acumulador}\n*${e}*\n${acumulador}`
    })
    return giftsMap
  }