'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const bcrypt = require('bcrypt');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    /*Store hash in your db*/
    console.log('hash:',hash);
    bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
        /*res == true or false*/
        console.log('res:', res);
      });
  });


//END_ASYNC

//START_SYNC
const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log('sync hash',hash);
const result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log('result:', result);


//END_SYNC






























app.listen(process.env.PORT || 3000, () => {});
