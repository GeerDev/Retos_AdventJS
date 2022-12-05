function distributeGifts(packOfGifts, reindeers) {
    const reindeersMap = reindeers.map(element => {
      return element.length * 2
    }).reduce((a,b) => a + b, 0)
    return Math.floor(reindeersMap/packOfGifts.join("").length) 
  }