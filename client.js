const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log('server responded with: ',  data)
  });
  conn.on('connect', () => {
    console.log('Successfully connected to game server.')
    conn.write('Name: JDM');
    // setTimeout(function(){conn.write('Move: up')}, 300);
    // setTimeout(function(){conn.write('Move: up')}, 600);
    // setTimeout(function(){conn.write('Move: up')}, 900);
    // setTimeout(function(){conn.write('Move: up')}, 1200);
  }); 

  conn.on('data', (data) => {
  });

  return conn;
}

module.exports = { connect };