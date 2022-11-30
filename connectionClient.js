const { Pool } = require('pg')
 
const pool = new Pool({
  host: '127.0.0.1',
  port: 5432,
  user: 'sintu',
  password: 'Shintu@123',
  database:"pern_todo"
})


module.exports={
  pool
}

