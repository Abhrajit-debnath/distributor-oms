import express, { Router } from "express"
import signinController from "../../../controllers/auth/singin.controller"

const router: Router = express.Router()

router.post("/", signinController)

export default router