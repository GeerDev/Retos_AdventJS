function checkPart(part) {
    const part1 = part.split("")
    for(i=0;i<part1.length;i++) {
      if (!(part1[i] === part1[part1.length - 1 - i])) {  
        part1.splice(i,1)
          if (!(part1.join("") === part1.reverse().join("")) && part1[i] === part1[i + 1]) {
            return false
          }
      }
    }
    return true
  }
  
  checkPart("zzzoonzzz")