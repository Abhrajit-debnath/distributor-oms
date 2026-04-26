import "dotenv/config"
import express from "express"
import authRoute from "./routes/auth/index"
import shopkeeperRoute from "./routes/shopkeeper/shopkeeper.route"
import errorHandler from "./utils/errorHandler"


const app = express()


const PORT = process.env.PORT

app.use(express.json())


if (!PORT) {
    throw new Error("PORT is not defined")
}

// Auth routes 
app.use("/api/auth", authRoute)
// Shopkeeper routes 
app.use("/api/shopkeeper", shopkeeperRoute)


app.get("/health-check", (req, res) => {
    res.json({
        status: "active"
    })
})


app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);

})