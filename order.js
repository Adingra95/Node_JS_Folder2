var req_online=require('./online.js');
var req_offline=require('./offline.js')

console.log('\ Online Order:',req_online.online());
console.log('\ Offline Order:',req_offline.offline());
