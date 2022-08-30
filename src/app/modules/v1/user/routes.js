
import express from 'express';

import UserController from './controller';

class UserRouter {

    constructor() {
        this.router = express.Router();
        this.userController = new UserController();
        // routes declaration
        this.router.get('/', this.userController.index);
        this.router.post('/', [], this.userController.store);
        this.router.delete('/:id', [], this.userController.destroy);
        this.router.post('/token-decode', [], this.userController.fetchTokenInfo);
    }
}


module.exports = UserRouter;