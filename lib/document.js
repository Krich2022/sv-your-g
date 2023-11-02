const Rectangle = require("./rectangle");
const Square = require("./square");
const Triangle = require("./triangle");

const createDocument = (shape, color, text) => {
  let newShape;
  switch (shape) {
    case "Triangle":
      newShape = new Triangle(text);
      break;
    case "Square":
      newShape = new Square(text);
      break;
    case "Rectangle":
      newShape = new Rectangle(text);
      break;
    default:
      console.error("Unknown shape");
  }
  if (color) {
    newShape.setColor(color);
  }
  return newShape.render();
};

module.exports = { createDocument };
