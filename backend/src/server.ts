import dotenv from "dotenv"
dotenv.config()
import express from "express"


const app = express()

const PORT = process.env.PORT

if (!PORT) {
    throw new Error("PORT is not defined")
}


app.get("/health-check", (req, res) => {
    res.json({
        status: "active"
    })
})


app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);

})