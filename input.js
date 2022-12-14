// setup interface to handle user input from stdin
// let connection;


let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};

// stdin.on("data", handleUserInput);
const handleUserInput = function (data) {
  if (data === '\u0003') { // terminate the game when this key is used
    process.exit();
  } else if (data === 'w') { 
    connection.write("Move: up");
  } else if (data === 'a') {
    connection.write("Move: left");
  } else if (data === 's') {
    connection.write("Move: down");
  } else if (data === 'd') {
    connection.write("Move: right")
  }
}

module.exports = setupInput;