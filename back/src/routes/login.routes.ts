import { Router } from "express";
import { createTokenController } from "../controllers/login.controller";

const loginRoutes: Router = Router();

loginRoutes.post("", createTokenController);

export default loginRoutes;
