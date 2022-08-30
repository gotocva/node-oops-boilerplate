
import express from 'express';

class ExpressRouter {

    constructor() {

    }

    router() {
        return express.Router();
    }
}

module.exports = ExpressRouter;