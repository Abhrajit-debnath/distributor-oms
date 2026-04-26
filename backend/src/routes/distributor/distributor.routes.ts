import express, { Router } from "express"
import shopkeeperController from "../../controllers/shopkeeper/getDistributors.controller"
import orderStatusController from "../../controllers/distributor/patchOrderStatus.controller"
import orderController from "../../controllers/shopkeeper/postOrder.controller"

const router: Router = express.Router()

// fetch all shopkeepers
router.get("/shopkeepers",shopkeeperController )
// fetch all orders by distributorId
router.get("/orders", orderController)
// post products by distributor
router.post("/distributors/products",orderController)
// update order status by distributor
router.patch("/orders/:orderId/status",orderStatusController)

export default router