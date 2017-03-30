const mongoose = require("mongoose");
const fs = require('fs');
const path = require('path');

//import { SDK } from './SDK'
//const SDK = require('./SDK');

mongoose.Promise = global.Promise;

//read settings synclly first
const file: string = path.join(__dirname,'wcnexus/wcnexus.json');
const siteConfig = JSON.parse(fs.readFileSync(file, 'utf8'));

const wcnexus = siteConfig[0];

//const db = wcnexus.mongo.db;

/*
mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]
*/

const mongoInstance = mongoose.connect(`mongodb://${ wcnexus.mongo.user }:${ wcnexus.mongo.password }@localhost/${ wcnexus.mongo.db }?authSource=${ wcnexus.mongo.authDB }`);

//const mongoInstance = mongoose.connect(`mongodb://root:hkjl4848@localhost`);

mongoose.connection
.once('open', () => {
    console.log(`Connection to ${ wcnexus.mongo.db } established successfully.`);
})
.on('error', (error) => {
    console.error(error);
})
;

export const mgInstance = mongoInstance;
export const wcnConstr = wcnexus;