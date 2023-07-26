import { Router } from "express";
import {
  createUsersController,
  deleteUsersController,
  listUsersController,
  retrieveUsersController,
  updateUsersController,
} from "../controllers/user.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValideMiddleware.middleware";
import {
  userSchemaRequest,
  userSchemaUpdateRequest,
} from "../schemas/usersSchema.schema";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValidMiddleware.middleware";
import ensureOwnerUserMiddleware from "../middlewares/ensureOwnerUserMiddleware.middleware";
import ensureIdExistsMiddleware from "../middlewares/ensureIdExistsMiddleware.middleware";
import ensureEmailOrTelephoneAlreadyExistsMiddleware from "../middlewares/ensureEmailAlreadyExistsMiddleware.middleware";

const userRoutes = Router();

userRoutes.post(
  "",
  ensureEmailOrTelephoneAlreadyExistsMiddleware,
  ensureDataIsValidMiddleware(userSchemaRequest),
  createUsersController
);

userRoutes.get("", ensureTokenIsValidMiddleware, listUsersController);

userRoutes.get(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureIdExistsMiddleware,
  retrieveUsersController
);

userRoutes.patch(
  "/:id",
  ensureIdExistsMiddleware,
  ensureTokenIsValidMiddleware,
  ensureOwnerUserMiddleware,
  ensureDataIsValidMiddleware(userSchemaUpdateRequest),
  updateUsersController
);
userRoutes.delete(
  "/:id",
  ensureIdExistsMiddleware,
  ensureTokenIsValidMiddleware,
  ensureOwnerUserMiddleware,
  deleteUsersController
);

export default userRoutes;
