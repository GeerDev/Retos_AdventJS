function selectSleigh(distance, sleighs) {
    const mapeo = sleighs.map(a => [a.name, a.consumption * distance - 20]).filter(a => Math.sign(a[1]) === -1 || a[1] === 0)
    const maximo = Math.max(...mapeo.map(b => b[1]))
    const elegir = mapeo.filter(a => a[1] === maximo).flat()
    return elegir.length !== 0 ? elegir[0] : null
  }