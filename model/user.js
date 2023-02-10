import pool from '../utils/database.js';

export default class UserModel {
    static async get_user(user_id) {
        console.log(`MODEL get_user :: user_id = ${user_id}`)
        let get_user_query = `SELECT * FROM USERS WHERE ID=${user_id}`;
        console.log(`MODEL get_user :: Query = ${get_user_query}`);
        const query_res = await pool.query(get_user_query, (err, data) => {
            if (err) {
                console.log("ERROR :: Database access error - ", err);
                return "";
            } else {
                console.log("SUCCESS :: Data extracted from the database = ", data);
                return data;
            }
        });
        return query_res;

    }
}