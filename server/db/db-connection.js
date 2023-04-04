const { Pool } = require("pg");
const db = new Pool({
  connectionString: process.env.DATABASE_URI,
});

module.exports = db;
//process.env is an obj
//database uri is a prop of that obj
