const { connect } = require("./client");

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf-8");
  stdin.resume();
  const handleUserInput = stdin.on("data", (data) => {
    if (data === "\u0003") {
      process.exit();
    }
  });
  return stdin;
};

console.log("Connecting...");
connect();
setupInput();
