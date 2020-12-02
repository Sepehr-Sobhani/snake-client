const stdin = process.stdin;
const handleUserInput = stdin.on("data", (data) => {
  if (data === "\u0003") {
    process.exit();
  }
});

const setupInput = () => {
  stdin.setRawMode(true);
  stdin.setEncoding("utf-8");
  stdin.resume();
  handleUserInput;
  return stdin;
};

module.exports = { setupInput };
