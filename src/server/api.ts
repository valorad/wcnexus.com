import * as express from 'express';

//import mgInstance from './dataAccess';
import { SDK } from './SDK';

const mgInstance = require('./dataAccess');
//const SDK = require('../../app/dataAccess/schemas/');

const jwt = require('express-jwt');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

//read settings synclly first
const file: string = path.join(__dirname,'wcnexus/wcnexus.json');
const siteConfig = JSON.parse(fs.readFileSync(file, 'utf8'));

const wcnexus = siteConfig[0];

// auth0 middleware
const authCheck = jwt({
  secret: new Buffer(wcnexus.auth0.secret),
  audience: wcnexus.auth0.client
});

const router = express.Router();
/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/authy', (req, res) => {
  res.json(wcnexus);
});

router.get('/posts', authCheck, (req, res) => {
  SDK.find().then((result)=> {
    res.send(result);
  });
});

module.exports = router;
