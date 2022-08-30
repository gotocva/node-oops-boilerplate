

import { encrypt, decrypt } from '../../../../utils/crypto';
import User from './model';

class UserController {

    constructor() {}

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async store(req, res) {
        req.body.time = new Date().valueOf();
        req.body.auth_token = encrypt(JSON.stringify(req.body));
        const userObj = new User(req.body);
        const user = await userObj.save().catch(res.errorResponse);
        return res.successResponse(user, 'New account created successfully');
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async index(req, res) {
        const users = await User.find({}).exec();
        return res.successResponse(users, 'success');
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async destroy(req, res) {
        const users = await User.findOneAndRemove({_id: req.params.id}).exec();
        return res.successResponse(users, 'User deleted successfully');
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async fetchTokenInfo(req, res) {
        try {
            return res.successResponse(JSON.parse(decrypt(req.body.auth_token)), 'token details');
        } catch (exception) {
            return res.errorResponse(exception, 'Exception caught');
        }
    }
}


module.exports = UserController;