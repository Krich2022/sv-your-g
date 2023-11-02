const Shape = require("./shape");
class Triangle extends Shape {
  constructor(base, height) {
    super("Triangle");
    this.base = base || 200;
    this.height = height || 164;
  }

  render() {
    return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
  }
}
module.exports = Triangle;
