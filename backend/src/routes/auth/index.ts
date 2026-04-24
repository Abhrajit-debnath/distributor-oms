import express, { Router } from "express"
import signupRoute from "./signup/signup.route"
import signinRoute from "./signin/signin.route"

const router: Router = express.Router()

router.use("/signup", signupRoute)
router.use("/signin", signinRoute)

export default router