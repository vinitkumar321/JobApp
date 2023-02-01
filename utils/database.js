import mysql from 'mysql';
import dbConfig from '../configs/db_config.js';
import dbConst from '../constants/database.js';

// create user admin@localhost identified by 'hello#321';
// GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost' WITH GRANT OPTION;
let pool = mysql.createPool(dbConfig.development);

const poolDb = async (sqlQuery) => {
    pool.getConnection(sqlQuery, (err, connection) => {
        if (err) {
            if (err.code === dbConst.ERROR.PROTOCOL_CONNECTION_LOST) {
                console.error(dbConst.MESSAGE.PROTOCOL_CONNECTION_LOST)
            }
            if (err.code === dbConst.ERROR.ER_CON_COUNT_ERROR) {
                console.error(dbConst.MESSAGE.ER_CON_COUNT_ERROR)
            }
            if (err.code === dbConst.ERROR.ECONNREFUSED) {
                console.error(dbConst.MESSAGE.ECONNREFUSED)
            }
        } else {
            console.log(dbConst.MESSAGE.SUCCESS);
            connection.query(sqlQuery, (err, data) => {
                if (err) {
                    console.log("The query did not execute");
                } else {
                    console.log("The query executed successfully");
                }
            });
        }

        if (connection) {
            connection.release();
            console.log("Successfully released the connection.");
        }
    });
};

export default poolDb;
