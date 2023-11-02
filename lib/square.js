const Shape = require("./shape");

class Square extends Shape {
  constructor(sideLength) {
    super("Square");
    this.sideLength = sideLength;
  }

  render() {
    return `<rect width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
  }
}

module.exports = Square;
