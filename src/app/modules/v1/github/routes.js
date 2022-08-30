
import express from 'express';

import UserController from './controller';

class UserRouter {

    constructor() {
        this.router = express.Router();
        this.userController = new UserController();
        this.router.get('/', this.userController.index);
    }
}


module.exports = UserRouter;