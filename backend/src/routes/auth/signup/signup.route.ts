import express, { Router } from "express"
import signupController from "../../../controllers/auth/signup.controller"

const router: Router = express.Router()

router.post("/", signupController)

export default router