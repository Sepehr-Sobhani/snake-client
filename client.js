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
  // this one is for being idle
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = { connect };
