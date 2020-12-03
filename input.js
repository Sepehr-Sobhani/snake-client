// let connection = require("./play");
let connection;
const { DIRECTIONS, MESSAGES } = require("./constants");
const setupInput = (conn) => {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf-8");
  stdin.resume();
  handleUserInput;
  return stdin;
};

const stdin = process.stdin;
const handleUserInput = stdin.on("data", (data) => {
  if (data === "\u0003") {
    process.exit();
  }
  connection.write(DIRECTIONS[data] || MESSAGES[data]);
});

module.exports = { setupInput };
