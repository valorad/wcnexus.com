import * as express from 'express';

//import mgInstance from './dataAccess';
import { SDK } from './SDK';

const mgInstance = require('./dataAccess');
//const SDK = require('../../app/dataAccess/schemas/');

const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/posts', (req, res) => {
  SDK.find().then((result)=> {
    res.send(result);
  });
});

module.exports = router;
