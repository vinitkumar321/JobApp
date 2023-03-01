const dbPool = require('../utils/database');

let createUsersTable = `CREATE TABLE IF NOT EXISTS USERS(id int auto_increment primary key, \
    first_name varchar(256), last_name varchar(256)), email_id varchar(400), contact_number int`;


function createBase(sqlQuery) {
    dbPool.query(sqlQuery, (err, rows) => {
        if (err) {
            console.error("Error: ", err);
        } else {
            console.log("Query executed successfully", rows);
        }
    });
}

createBase(createUsersTable);