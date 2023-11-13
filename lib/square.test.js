const Square = require("./square");

describe("Square Class", () => {
  test("render method should return the correct SVG string", () => {
    const shape = new Square("test", 300, 300, "white");
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="blue" />
    <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="white" font-size="60" font-family="Arial">test</text>
</svg>`
    );
    console.log(shape.render());
  });
});
