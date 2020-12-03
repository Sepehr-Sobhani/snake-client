const IP = "localhost";
const PORT = 50541;
const NAME = process.argv[2];
// const MOVE_UP_KEY = "Move: up";
const DIRECTIONS = {
  w: "Move: up",
  s: "Move: down",
  a: "Move: left",
  d: "Move: right",
};

const MESSAGES = {
  h: "Say: Hello",
  e: "Say: gonna eat u now",
  r: "Say: run as fast as u can",
};

module.exports = { IP, PORT, NAME, DIRECTIONS, MESSAGES };
