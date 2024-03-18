import { Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from '../constants/Paths';
import UserRoutes from './UserRoutes';


// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();


// ** Add UserRouter ** //

const userRouter = Router();

// Add one user
userRouter.post(
  Paths.Users.Add,
  UserRoutes.add,
);
userRouter.post(
    Paths.Users.Get,
    UserRoutes.all,
);

// Add UserRouter
apiRouter.use(Paths.Users.Base, userRouter);


// **** Export default **** //

export default apiRouter;
