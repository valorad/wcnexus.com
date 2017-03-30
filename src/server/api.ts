import { Router, Request, Response } from 'express';

//import mgInstance from './dataAccess';
//import { SDK } from './SDK';

import { wcnConstr, mgInstance } from './dataAccess';

//const SDK = require('../../app/dataAccess/schemas/');

//import { jwt } from 'express-jwt';
//import { cors } from 'cors';

// schemas

import { upcomings } from './schemas/upcomings';

const jwt = require('express-jwt');
const cors = require('cors');
// const fs = require('fs');
// const path = require('path');

//read settings synclly first
// const file: string = path.join(__dirname,'wcnexus/wcnexus.json');
// const siteConfig = JSON.parse(fs.readFileSync(file, 'utf8'));

// site settings passed from dataAccess
const wcnexus = wcnConstr;

// auth0 middleware
const authCheck = jwt({
  secret: new Buffer(wcnexus.auth0.secret),
  audience: wcnexus.auth0.client
});

const router = Router();
/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/site', (req, res) => {
  // send to front-end because Auth0 needs token as well
  res.json(wcnexus);
});

// router.get('/posts', authCheck, (req, res) => {
//   SDK.find().then((result)=> {
//     res.send(result);
//   });
// });

router.get('/upcomings', (req: Request, res: Response) => {
  // send to front-end because Auth0 needs token as well
  upcomings.find().then((result) => {
    res.send(result);
  });
});

export const api = router;

//module.exports = router;
