import express, { Router } from "express"
import distributorController from "../../controllers/shopkeeper/getDistributors.controller"
import distributorProductsController from "../../controllers/shopkeeper/getDistributorProducts.controller"
import orderController from "../../controllers/shopkeeper/postOrder.controller"

const router: Router = express.Router()

// fetch all distributors
router.get("/distibutors", distributorController)
// fetch all products by distributorId
router.get("/distributors/:distributorId/products", distributorProductsController)
// fetch all orders by distributorId
router.post("/distributors/:distributorId/orders",orderController)

export default router