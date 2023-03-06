import pool from '../utils/database.js'

export default class UserModel {
  static async get_user(user_id) {
    console.log(`MODEL get_user :: user_id = ${user_id}`)
    let get_user_query = `SELECT * FROM USERS WHERE ID=${user_id}`
    console.log(`MODEL get_user :: Query = ${get_user_query}`)

    return new Promise((resolve, reject) => {
      pool.query(get_user_query, (err, results, fields) => {
        if (err) {
          console.log("ERROR :: Couldn't connect to the database. ", err)
          return reject(err)
        }
        console.log('MODEL get_user :: results = ', results)
        resolve(results)
      })
    })
  }

  static async get_all_users() {
    let get_all_users_query = `SELECT * FROM USERS LIMIT 20`
    console.log(`MODEL get_all_users :: Query = ${get_all_users_query}`)

    return new Promise((resolve, reject) => {
      pool.query(get_all_users_query, (err, results, fields) => {
        if (err) {
          console.log("ERROR :: Couldn't connect to the database. ", err)
          return reject(err)
        }
        console.log('MODEL get_all_users_query :: results = ', results)
        resolve(results)
      })
    })
  }

  static async create_user(user_id, first_name, last_name) {
    let query = `INSERT INTO USERS(id, first_name, last_name) VALUES(${user_id}, "${first_name}", "${last_name}")`
    console.log(`MODEL create_user :: Query = ${query}`)

    return new Promise((resolve, reject) => {
      pool.query(query, (err, results, fields) => {
        if (err) {
          console.log("ERROR: Couldn't connect to the database. ", err)
          return reject(err)
        }
        console.log('MODEL create_user :: results = ', results)
        resolve(results)
      })
    })
  }
}
