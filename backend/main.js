const express = require('express');
const localIpAddress = require('local-ip-address')
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router/routes');
const services = require('./services/helper');
const app = express();
const port = 3001;

(async () => {

  console.log(localIpAddress())
  const ipAddress = localIpAddress();
  console.log(await services.checkTable());
  
  app.use(cors());
  app.use(bodyParser.json());

  app.use("/", router);

  // app.listen(port, () => {
  //   console.log(`App listening on port ${port}`)
  //   console.log(`http://${ipAddress}:${port}`)
  //   console.log(`http://${ipAddress}:${port}/getUsers`)
  //   console.log(`http://${ipAddress}:${port}/createUser`)
  //   console.log(`http://${ipAddress}:${port}/authUser`)
  // });

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
