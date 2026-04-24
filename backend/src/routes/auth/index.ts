import express, { Router } from "express"
import signupRoute from "./signup/signup.route"

const router: Router = express.Router()

router.use("/signup", signupRoute)

export default router