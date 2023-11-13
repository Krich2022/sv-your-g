const Rectangle = require("./rectangle");
const Square = require("./square");
const Triangle = require("./triangle");

const createDocument = (shape, text, width, height, textColor, shapeColor) => {
  let newShape;
  switch (shape) {
    case "Triangle":
      newShape = new Triangle(text, width, height, textColor, shapeColor);
      break;
    case "Square":
      newShape = new Square(text, width, height, textColor, shapeColor);
      break;
    case "Rectangle":
      newShape = new Rectangle(text, width, height, textColor, shapeColor);
      break;
    default:
      console.error("Unknown shape");
  }
  return newShape.render();
};

module.exports = { createDocument };
