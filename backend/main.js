const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router/routes');
const services = require('./services/helper');
const app = express();
const port = 3000;

(async () => {
  console.log(await services.checkTable());
  
  app.use(cors());
  app.use(bodyParser.json());

  app.use("/", router);

  app.listen(port, () => {
    console.log(`App listening on port ${port}`)
    console.log(`http://localhost:${port}`)
    console.log(`http://localhost:${port}/getUsers`)
    console.log(`http://localhost:${port}/createUser`)
    console.log(`http://localhost:${port}/authUser`)
  });

  //avoid nodejs exiting on error
  process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err);
  });

})();
