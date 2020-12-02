const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542,
  });
  conn.setEncoding("utf-8");
  conn.on("data", () => {
    console.log("you ded cuz you idled");
  });
  return conn;
};

console.log("Connecting...");
connect();
