const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
const conn = connect();

setupInput(conn); //THIS IS THE CONNECTION OBJECT (call setupInput in play.js, )
//function(function());
