import mysql from 'mysql'
import dbConfig from '../configs/db_config.js'
import dbConst from '../constants/database.js'

// create user admin@localhost identified by 'hello#321';
// GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost' WITH GRANT OPTION;
let pool = mysql.createPool(dbConfig.development)

pool.getConnection((err, connection) => {
  console.log('Mysql Pool is taken')
  if (err) {
    if (err.code === dbConst.ERROR.PROTOCOL_CONNECTION_LOST) {
      console.error(dbConst.MESSAGE.PROTOCOL_CONNECTION_LOST)
    } else if (err.code === dbConst.ERROR.ER_CON_COUNT_ERROR) {
      console.error(dbConst.MESSAGE.ER_CON_COUNT_ERROR)
    } else if (err.code === dbConst.ERROR.ECONNREFUSED) {
      console.error(dbConst.MESSAGE.ECONNREFUSED)
    } else {
      console.error('DB error ', err)
    }
  } else {
    console.log('Database connected successfully!')
  }
  if (connection) {
    connection.release()
    console.log('Successfully released the connection.')
  }
})

export default pool
