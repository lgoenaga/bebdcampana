var path = require('path');


const dotenvAbsolutePath = path.join(__dirname, '.env');

/* INFO: Require dotenv package for retieving and setting env-vars at runtime via absoliute path due to pkg */

  const dotenv = require('dotenv').config({
    path: dotenvAbsolutePath
  });
  if (dotenv.error) {
    console.log(`ERROR WHILE READING ENV-VARS:${dotenv.error}`);
    throw dotenv.error;
  }

module.exports = {
  nodeEnv: process.env.NODE_ENV,
  nodePort: process.env.NODE_PORT,
  dbUser: process.env.USER_DB,
  dbPwd: process.env.USER_PWD,
  dbName: process.env.DB_MONGODB,
  nodeHost: process.env.NODE_HOST,
};