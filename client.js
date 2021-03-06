const net = require("net");
const { IP, PORT, NAME } = require("./constants");
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.setEncoding("utf-8");
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: ${NAME}`);
  });
  // this one is for being idle
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = { connect };
