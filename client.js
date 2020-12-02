const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
  conn.setEncoding("utf-8");
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: Sep");
  });
  //     conn.on("connect", () => {
  // });

  // this one is for being idle
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = { connect };

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)
