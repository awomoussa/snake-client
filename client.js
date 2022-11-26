const net = require("net");
// const {IP, PORT} = require("./constants");


//establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", 
    port: 50541 // PORT number here,
    
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("connected")
    conn.write("Name: AMB");
    //conn.write("Move: up");
    // code that does something when the connection is first established
  });
  conn.on("data", () => {
    console.log("you ded cuz you idled");
  })
  return conn;
};



module.exports = connect