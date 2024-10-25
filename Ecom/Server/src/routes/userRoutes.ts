import { Router } from "express";
import { getUsers } from "../controllers/userController";
import { createUsers } from "../controllers/userController";


const router = Router()

router.get('/', getUsers)
router.post('/', createUsers)

export default router