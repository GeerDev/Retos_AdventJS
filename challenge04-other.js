function fitsInOneBox(boxes) {

    return boxes.sort((a, b) => (b.l * b.w * b.h) - (a.l * a.w * a.h))
      .every((b, index) => {
        if (!boxes[index + 1]) return true
        return (
          b.l > boxes[index + 1].l && b.w > boxes[index + 1].w && b.h > boxes[index + 1].h
        )
      })
  }