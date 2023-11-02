const inquirer = require("inquirer");
const { join } = require("path");
const { writeFile } = require("fs/promises");
const { createDocument } = require("./document");

class CLI {
  constructor() {
    this.title = "";
    this.shape = "";
  }
  run() {
    return inquirer
      .prompt([
        {
          type: "list",
          name: "shape",
          message: "What shape would you like?",
          choices: ["Triangle", "Square", "Rectangle"],
        },
        {
          type: "input",
          name: "text",
          message: "Enter at most three characters:",
          validate: function (input) {
            if (input.length === 3) {
              return true;
            } else {
              return "Please enter no more than three characters.";
            }
          },
        },
        {
          name: "color",
          type: "input",
          message:
            "What color would you like? Please use either color keyword or hexidecimal values.",
        },
        {
          type: "input",
          name: "name",
          message: "What is the name of the svg?",
        },
      ])
      .then(({ shape, name, color, text }) => {
        return writeFile(
          join(__dirname, "..", "examples", `${name}.svg`),
          createDocument(shape, color, text)
        );
      })
      .then(() => console.log("Your svg has been created!"))
      .catch((err) => {
        console.error(err);
        console.error("Something Went Wrong!");
      });
  }
}

module.exports = CLI;
