import Router from "express-promise-router";
import { authJwt } from "../middlewares";
import {userBoard} from "../controllers/user.controller";

const userRouter = Router();

userRouter.use((req, res, next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
})

userRouter.get("/", [authJwt.verifyToken], userBoard);

export default userRouter;
