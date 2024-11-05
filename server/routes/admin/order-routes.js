import express from "express";
import {
  getAllOrdersofAllUser,
  getOrderDetailsForAdmin,
  updateOrderStatus,
} from "../../controllers/admin/order-controller.js";
const router = express.Router();

router.get("/get", getAllOrdersofAllUser);
router.get("/details/:id", getOrderDetailsForAdmin);
router.put("/update/:id", updateOrderStatus);
export default router;
