var cluster = require('cluster');
var os = require('os');
if(cluster.isMaster) {
 var cpus = 4
 console.log(cpus)
 //start as many children as the number of CPUs
 for (var i = 0; i < cpus; i++) { //[1]
 cluster.fork();
 }
} else {
 require('./ist'); //[2]
}
