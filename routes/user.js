import express from "express";
import { getAllUsers, register,getUserDetails, login} from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", register);

router.post("/login", login);

//dynammic URL
router.route("/userid/:id").get(getUserDetails);

export default router;