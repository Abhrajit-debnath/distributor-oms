import "dotenv/config"
import express from "express"
import authRoutes from "./routes/auth/index"
import shopkeeperRoutes from "./routes/shopkeeper/shopkeeper.routes"
import distributorRoutes from "./routes/distributor/distributor.routes"
import errorHandler from "./utils/errorHandler"
import authMiddleware from "./middlewares/auth.middleware"
import authorizeMiddleware from "./middlewares/role.middleware"


const app = express()


const PORT = process.env.PORT

app.use(express.json())


if (!PORT) {
    throw new Error("PORT is not defined")
}

// Auth routes 
app.use("/api/auth", authRoutes)
// Shopkeeper routes 
app.use("/api/shopkeeper", authMiddleware, authorizeMiddleware("order_product", "see_distributors", "make_payment"), shopkeeperRoutes)

app.use("/api/distibutor", authMiddleware, authorizeMiddleware("list_product", "update_status", "record_payment"), distributorRoutes)


app.get("/health-check", (req, res) => {
    res.json({
        status: "active"
    })
})


app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);

})