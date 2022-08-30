

import UserRouter from '../app/modules/v1/user/routes';

const userRouter = new UserRouter();

/**
 * 
 * @param {*} app 
 * @returns 
 */
const routeServiceProvider = async (app) => {
    return new Promise((resolve, reject) => {
        try {

            // implement route injection here 
            app.use('/api/v1/user', userRouter.router);





            
            /**
             * 404 not found exception handler
             */
            app.use((req, res, next) => {
                return res.errorResponse({}, 'Requested route not found', 404);
            });

            resolve(app);

        } catch (error) {
            reject(error);
        }
    });
}

module.exports = routeServiceProvider;