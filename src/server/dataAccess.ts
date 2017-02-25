const mongoose = require("mongoose");
import { SDK } from './SDK'
//const SDK = require('./SDK');

mongoose.Promise = global.Promise;

const db = "CDK";

const mgInstance = mongoose.connect(`mongodb://localhost/${ db }`);

mongoose.connection
.once('open', () => {
    console.log(`Connection to ${ db } established successfully.`);
})
.on('error', (error) => {
    console.error(error);
})
;

export default mgInstance;