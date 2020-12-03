// let connection = require("./play");
let connection;

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
  if (data === "w") {
    connection.write("Move: up");
  }
  if (data === "s") {
    connection.write("Move: down");
  }
  if (data === "a") {
    connection.write("Move: left");
  }
  if (data === "d") {
    connection.write("Move: right");
  }
  if (data === "h") {
    connection.write("Say: Hello");
  }
  if (data === "e") {
    connection.write("Say: gonna eat u now");
  }
  if (data === "r") {
    connection.write("Say: run as fast as u can");
  }
});

module.exports = { setupInput };
