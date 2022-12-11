function createCube(size) {
    let cadena = ''
    for(i=0; i<=size; i++) {
      if(i !== size) {
        cadena += " ".repeat(size - i) + `/\\`.repeat(i) + `_\\`.repeat(size) + "\n"
      } else {
        cadena += `/\\`.repeat(i) + `_\\`.repeat(size) + "\n"
      }   
    }
    for(i=size; i>0; i--) {
      if (i !== size) {
        cadena += " ".repeat(size - i) + `\\/`.repeat(i) + `_/`.repeat(size) + "\n"
      } else {
        cadena += `\\/`.repeat(i) + `_/`.repeat(size) + "\n"
      }   
    }
    return cadena.substring(cadena.indexOf("\n"), cadena.length - 1).replace("\n", "").replace(" ", "")
  }