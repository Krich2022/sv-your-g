class Shape {
  constructor(type) {
    this.type = type;
    this.color = "black";
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    throw new Error("Not implemented");
  }
}

module.exports = Shape;
