function getCompleted(part, total) {
    const pSplit = part.split(':')
    const partTime = pSplit[0] * 3600 + pSplit[1] * 60 + pSplit[2] * 1
    const tSplit = total.split(':')
    const totalTime = tSplit[0] * 3600 + tSplit[1] * 60 + tSplit[2] * 1
  
    const gcd = (a, b) => !b ? a : gcd(b, a % b)
    const gcdCalc = gcd(totalTime, partTime)
    return `${partTime / gcdCalc}/${totalTime / gcdCalc}`
  }