const Triangle = require("./triangle");

describe("Triangle Class", () => {
  test("render method should return the correct SVG string", () => {
    const shape = new Triangle("test", 200, 300, "white");
    shape.setColor("blue", "yes");
    expect(shape.render()).toEqual(
      `<svg width="200" height="300" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,300 100,0 200, 300" fill="blue" />
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="white" font-size="30" font-family="Arial">test</text>
    </svg>`
    );
    console.log(shape.render());
  });
});
