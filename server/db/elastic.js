var elasticsearch=require('elasticsearch');
var config = require('../config.json');
var bonsaiUrl    = config.bonsai;


    var client= new elasticsearch.Client({
                                host: "https://4obkp3061h:6xa2ft2yf6@livigro-4898362821.ap-southeast-2.bonsaisearch.net",
                               // log: 'trace'
                            });


module.exports = client;
