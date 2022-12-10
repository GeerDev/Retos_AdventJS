function checkJump(heights) {
    const primero = heights.slice(0,heights.indexOf(Math.max(...heights)))
    const segundo = heights.slice(heights.indexOf(Math.max(...heights)) + 1, heights.length)
  
  
    const filtrado1 = primero.filter((e, i) => primero[i] <= primero[i + 1])
    const filtrado2 = segundo.filter((e, i) => segundo[i] >= segundo[i + 1])
  
    return primero.length === filtrado1.length + 1 && segundo.length === filtrado2.length + 1
  }