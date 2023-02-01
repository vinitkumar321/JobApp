import UserModel from '../model/user.js';
import userConstant from '../constants/user.js';


export default class UserController {

    static async get_user(req, res, next) {
        try {
            let user_id = req.params.id;
            console.log("user_id = ", user_id);
            const user_data = await UserModel.get_user(user_id);
            console.log("user_data = ", user_data);
            res.status(200).json({ status: "success", body: user_data });
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    static async create_user(req, res, next) {
        try {
            let user_id = req.body.id;
            let first_name = req.body.first_name;
            let last_name = req.body.last_name;
            let email_id = req.body.email_id;
            res.status(200).json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async update_user(req, res, next) {
        try {
            let user_id = req.params.id;
            let first_name = req.body.first_name;
            let last_name = req.body.last_name;
            let email_id = req.body.email_id;
            res.status(200).json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async delete_user(req, res, next) {
        try {
            let user_id = req.params.id;
            res.status(200).json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async delete_all_users(req, res, next) {
        try {
            res.status(200).json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}