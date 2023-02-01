import poolDb from '../utils/database.js';

export default class UserModel {
    static get_user(user_id) {
        let get_user_query = `SELECT * FROM USERS WHERE ID=${user_id}`;
        console.log(`get_user_query = ${get_user_query}`);
        const query_res = poolDb(get_user_query);
        return query_res;
    }
}