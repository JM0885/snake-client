const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
connect(); //THIS IS THE CONNECTION OBJECT (call setupInput in play.js, )
//function(function());

setupInput();