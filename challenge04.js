function fitsInOneBox(boxes) {
    let acuArray = []
  
    boxes.forEach((ele1) => {
      let arrayBucle = []
      boxes.forEach((ele2) => {
        let verificado = ele1.l < ele2.l && ele1.w < ele2.w && ele1.h < ele2.h
          arrayBucle = [...arrayBucle, verificado]    
      })
      acuArray = [...acuArray, arrayBucle]
      arrayBucle = []
    })
    
    const position = acuArray.filter(element => element.some(a => a === true)).map(a=>a.join())
    
    const result = position.filter((b,i)=>{
      return position.indexOf(b) === i
    })
  
      return result.length === boxes.length - 1
  }