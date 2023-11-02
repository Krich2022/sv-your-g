const Shape = require("./shape");
class Rectangle extends Shape {
  constructor(width, height) {
    super("Rectangle");
    this.width = width;
    this.height = height;
  }

  render() {
    return `<rect width="${this.width}" height="${this.height}" fill="${this.color}" />`;
  }
}
module.exports = Rectangle;
